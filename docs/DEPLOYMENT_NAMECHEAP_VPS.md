# Namecheap VPS Deployment Guide

This guide assumes an Ubuntu-based Namecheap VPS, a domain already pointing to the server, and SSH access with sudo privileges.

## 1. Server Prerequisites

Install the base stack:

```bash
sudo apt update
sudo apt install -y nginx git ufw
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

Optional but recommended for HTTPS:

```bash
sudo apt install -y certbot python3-certbot-nginx
```

## 2. Prepare the App Directory

```bash
sudo mkdir -p /var/www/lsdb_website
sudo chown -R $USER:$USER /var/www/lsdb_website
cd /var/www/lsdb_website
git clone https://github.com/kelvinpetermsangi/lsdb_website.git current
cd current
```

If the repository is private, use a deploy key or HTTPS token instead of anonymous clone.

## 3. Configure Environment Variables

Copy the template and fill in production values:

```bash
cp .env.example .env.production
```

Minimum recommended values:

```env
NEXT_PUBLIC_SITE_URL=https://lsdb.or.tz
CONTACT_TO=info@lsdb.or.tz
SMTP_HOST=mail.privateemail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@lsdb.or.tz
SMTP_PASS=replace-with-your-password
SMTP_FROM="LSDB Website <contact@lsdb.or.tz>"
```

Load them before the PM2 start command, or place them in your shell profile, CI/CD pipeline, or PM2 environment strategy.

## 4. Install and Build

```bash
npm ci
npm run deploy:check
```

The build is configured with Next.js standalone output, which is better suited for VPS process managers.

Before starting the standalone server, copy the compiled static assets and the `public` directory into the standalone bundle:

```bash
rm -rf .next/standalone/.next/static .next/standalone/public
mkdir -p .next/standalone/.next .next/standalone/public
cp -R .next/static .next/standalone/.next/static
cp -R public/. .next/standalone/public/
```

If you use [`deploy/scripts/deploy.sh`](../deploy/scripts/deploy.sh), this step is already included.

## 5. Start the App with PM2

```bash
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

Verify the process:

```bash
pm2 status
pm2 logs lsdb-website
```

## 6. Configure Nginx

Copy the provided server block:

```bash
sudo cp deploy/nginx/lsdb.or.tz.conf /etc/nginx/sites-available/lsdb.or.tz
sudo ln -s /etc/nginx/sites-available/lsdb.or.tz /etc/nginx/sites-enabled/lsdb.or.tz
sudo nginx -t
sudo systemctl reload nginx
```

The included config proxies traffic to `127.0.0.1:3000`, which matches the PM2 settings in `ecosystem.config.js`.

## 7. Enable HTTPS

```bash
sudo certbot --nginx -d lsdb.or.tz -d www.lsdb.or.tz
```

Then verify auto-renewal:

```bash
sudo certbot renew --dry-run
```

## 8. Open Firewall Ports

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

## 9. Deployment Updates

For future updates:

```bash
cd /var/www/lsdb_website/current
git pull origin main
npm ci
npm run build
rm -rf .next/standalone/.next/static .next/standalone/public
mkdir -p .next/standalone/.next .next/standalone/public
cp -R .next/static .next/standalone/.next/static
cp -R public/. .next/standalone/public/
pm2 reload ecosystem.config.js --env production
```

There is also a helper script at `deploy/scripts/deploy.sh` that can be used after you make it executable.

## 10. Post-Deploy Checks

Run these checks after every deployment:

```bash
curl -I https://lsdb.or.tz
curl -I https://lsdb.or.tz/contact
curl -I https://lsdb.or.tz/sitemap.xml
curl -I https://lsdb.or.tz/documents/lsdb-business-profile.pdf
```

Also test:

- language switching
- contact-form submission
- WhatsApp quick-help button
- organization profile PDF download
- mobile navigation and footer
