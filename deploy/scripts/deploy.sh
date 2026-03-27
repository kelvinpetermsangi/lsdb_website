#!/usr/bin/env bash

set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/lsdb_website/current}"

cd "$APP_DIR"

npm ci
npm run build

pm2 reload ecosystem.config.js --env production || pm2 start ecosystem.config.js --env production
pm2 save
