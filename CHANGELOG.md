# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-03-27

### Added

- Centralized bilingual content system for English and Kiswahili
- Route-aware canonical metadata, sitemap, and robots output
- Global WhatsApp quick-support button
- Logo reveal animation for header and shared brand placements
- Standalone Next.js deployment output, PM2 config, Nginx example, and Namecheap VPS runbook
- SMTP-ready contact delivery with Nodemailer
- Release documentation for `v1.0.0`

### Changed

- Redesigned the homepage to have a distinct modern identity from inner pages
- Modernized the About, Services, Programs, Resources, Team, and Contact experiences
- Reworked the footer into a simpler brand-and-legal block with business-profile download only
- Moved contact-heavy footer information into the Contact page
- Replaced placeholder phone content with the official Tanzania number `+255 786 476 284`
- Switched the organization profile download to the attached LSDB business profile PDF
- Prepared production deployment configuration for VPS hosting

### Fixed

- Swahili content switching across shared and page-level sections
- Contact-page whitespace and empty sidebar card layout issues
- Route-specific canonical behavior
- Business profile download routing and asset serving

### Notes

- SMTP credentials still need to be supplied on the target server before go-live.
