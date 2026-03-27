#!/usr/bin/env bash

set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/lsdb_website/current}"
STANDALONE_DIR="$APP_DIR/.next/standalone"

cd "$APP_DIR"

npm ci
npm run build

rm -rf "$STANDALONE_DIR/.next/static" "$STANDALONE_DIR/public"
mkdir -p "$STANDALONE_DIR/.next" "$STANDALONE_DIR/public"
cp -R .next/static "$STANDALONE_DIR/.next/static"
cp -R public/. "$STANDALONE_DIR/public/"

pm2 reload ecosystem.config.js --env production || pm2 start ecosystem.config.js --env production
pm2 save
