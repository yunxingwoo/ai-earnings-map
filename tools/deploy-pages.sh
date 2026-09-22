#!/bin/zsh
# GitHub Pages 一键部署:同步 site/ → 推送 gh-pages 分支
# 用法: sh tools/deploy-pages.sh   (数据刷新后跑一次,~1 分钟后线上更新)
set -e
REPO=/Users/lucky/ai-earnings-map
WT=$REPO/.deploy-gh-pages
URL=https://yunxingwoo.github.io/ai-earnings-map/

cd "$REPO"
mkdir -p "$WT"
if [ ! -d "$WT/.git" ]; then
  git init -b gh-pages "$WT" >/dev/null
  cd "$WT"
  git remote add origin https://github.com/yunxingwoo/ai-earnings-map.git
  git fetch origin gh-pages >/dev/null 2>&1 && git reset --hard FETCH_HEAD >/dev/null 2>&1 || true
fi

rsync -a --delete --exclude='.bak-*' --exclude='.DS_Store' "$REPO/site/" "$WT/"
printf '' > "$WT/.nojekyll"
printf '# AI 算力财报全景 · Earnings Intelligence\n\n算力/AI 产业链财报景气地图(纯前端静态站):109+ 公司 × 15 环节信号,全部官方溯源。\n\n- 线上地址: %s\n- 数据全部来自 SEC / 巨潮资讯 / MOPS / 公司 IR 官方披露,未披露不估算\n' "$URL" > "$WT/README.md"

cd "$WT"
git add -A
if git -c user.name=yunxingwoo -c user.email=yunxingwoo@users.noreply.github.com commit -m "chore(pages): sync site build $(date '+%F %H:%M')" >/dev/null 2>&1; then
  git push origin gh-pages 2>&1 | tail -1
  echo "已推送,GitHub Pages 构建 ~1 分钟: $URL"
else
  echo "内容无变化,未推送 ($URL 在线即最新)"
fi
