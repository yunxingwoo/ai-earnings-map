#!/usr/bin/env python3
"""生成分享卡 ai-map-share-card.png(暖沙纸底+墨蓝二维码,扫码开 GitHub Pages)
用法: /Users/lucky/.workbuddy/binaries/python/envs/default/bin/python tools/gen-share-card.py
数字(公司/环节/指标/溯源)自动从 data/*.js 读取,不再手工维护。"""
import subprocess, os, datetime, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WORK = '/tmp/sharecard'
URL = 'https://yunxingwoo.github.io/ai-earnings-map/'
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
PY = os.environ.get('PYBIN', '/Users/lucky/.workbuddy/binaries/python/envs/default/bin/python')

# 1) 从数据层读真实数字
counts = subprocess.run(['node', '-e', (
    "const C=require('./data/companies.js');const M=require('./data/metrics.js');const S=require('./data/sources.js');"
    "const cs=C.COMPANIES||C.default||C,met=M.METRICS||M.default||M,src=S.SOURCES||S.default||S;"
    "console.log(cs.length,(C.LANE_DEFS||C.default||C).length,met.length,src.length)")],
    cwd=ROOT, capture_output=True, text=True, check=True).stdout.split()
n_co, n_lanes, n_met, n_src = counts
data_date = datetime.date.today().strftime('%Y-%m-%d')
print(f'数字: 公司{n_co} 环节{n_lanes} 指标{n_met} 溯源{n_src} | 数据版本 {data_date}')

# 2) 生成二维码(站点深色 #141413 模块,象牙白底,自带 2 模块静区)
os.makedirs(WORK, exist_ok=True)
qr_code = f'''
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer
from qrcode.image.styles.colormasks import SolidFillColorMask
qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=24, border=2)
qr.add_data({URL!r})
qr.make(fit=True)
img = qr.make_image(image_factory=StyledPilImage, module_drawer=RoundedModuleDrawer(),
                    color_mask=SolidFillColorMask(back_color=(250,249,245), front_color=(20,20,19)))
img.save({WORK!r}+'/qr.png')
'''
subprocess.run([PY, '-c', qr_code], check=True)

# 3) 模板注入数字
html = open(os.path.join(ROOT, 'tools/share-card-template.html'), encoding='utf-8').read()
for old, new in [('>109<', f'>{n_co}<'), ('>15<', f'>{n_lanes}<'), ('>642<', f'>{n_met}<'),
                 ('>571<', f'>{n_src}<'), ('数据版本 2026-09-22', f'数据版本 {data_date}')]:
    assert old in html, f'模板锚点丢失: {old}'
    html = html.replace(old, new)
open(os.path.join(WORK, 'card.html'), 'w', encoding='utf-8').write(html)

# 4) 无头 Chrome 截图(2x) → 覆盖保存
subprocess.run([CHROME, '--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
                '--force-device-scale-factor=2', '--window-size=900,1200',
                f'--screenshot={WORK}/card-raw.png', f'file://{WORK}/card.html'],
               capture_output=True, check=True)

from PIL import Image
img = Image.open(os.path.join(WORK, 'card-raw.png')).convert('RGB')
out = os.path.join(ROOT, 'ai-map-share-card.png')
img.save(out, optimize=True)
print('已生成:', out, img.size)
