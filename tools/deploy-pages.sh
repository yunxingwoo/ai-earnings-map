#!/bin/zsh
# GitHub Pages 一键部署(无状态):每次从 site/ 重建单提交 gh-pages 分支并强推
# 用法: sh tools/deploy-pages.sh   (数据刷新后跑一次,GitHub 构建 ~1 分钟后线上更新)
set -e -o pipefail
REPO=/Users/lucky/ai-earnings-map
STAGE=$REPO/.deploy-gh-pages
REMOTE=https://github.com/yunxingwoo/ai-earnings-map.git
URL=https://yunxingwoo.github.io/ai-earnings-map/

rm -rf "$STAGE"
mkdir -p "$STAGE"
rsync -a --delete --exclude='.bak-*' --exclude='.DS_Store' --exclude='.env' --exclude='.edgeone' \
      --exclude='.workbuddy*' --exclude='.deploy-*' --exclude='.git*' "$REPO/site/" "$STAGE/"
printf '' > "$STAGE/.nojekyll"
printf '# AI 算力财报全景 · Earnings Intelligence\n\n算力/AI 产业链财报景气地图(纯前端静态站):109+ 公司 × 15 环节信号,全部官方溯源。\n\n- 线上地址: %s\n- 数据全部来自 SEC / 巨潮资讯 / MOPS / 公司 IR 官方披露,未披露不估算\n' "$URL" > "$STAGE/README.md"

cd "$STAGE"
git init -q -b gh-pages
git remote add origin "$REMOTE"
git add -A
git -c user.name=yunxingwoo -c user.email=yunxingwoo@users.noreply.github.com \
  commit -q -m "chore(pages): site build $(date '+%F %H:%M')"
git push -q -f origin gh-pages
SHA=$(git rev-parse --short HEAD)
echo "已强推 $SHA → gh-pages,GitHub 构建 ~1 分钟: $URL"
