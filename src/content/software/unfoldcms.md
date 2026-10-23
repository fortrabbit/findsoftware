---
id: unfoldcms
name: UnfoldCMS
urls:
  home: https://unfoldcms.com
  docs: https://unfoldcms.com/docs
  pricing: https://unfoldcms.com/pricing
category:
  - cms
  - headless-cms
description: Self-hosted Laravel content management system with a REST API, built with React and TypeScript on the admin side.
status: stub
runtime:
  - php
hosting:
  - php
runtimeMin: php 8.2
basedOn:
  - laravel
contentStore:
  - database
databases:
  - mysql
  - postgres
  - sqlite
adminUi: true
headlessApi:
  - rest
templating: blade
i18n: yes, multi-language content
runsAs:
  - per-request
installMethod: web installer, or composer install
licenseModel: open-core
license: MIT, source-available, one-time commercial license
social:
  discord: https://discord.gg/unfold
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://unfoldcms.com
    checkedAt: 2026-10-23
  - field: urls
    url: https://unfoldcms.com/docs
    checkedAt: 2026-10-23
  - field: category
    url: https://unfoldcms.com/docs
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://unfoldcms.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: runtime
    url: https://unfoldcms.com/docs/requirements
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://unfoldcms.com/docs/requirements
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://unfoldcms.com/docs/installation
    checkedAt: 2026-10-23
  - field: databases
    url: https://unfoldcms.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://unfoldcms.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: templating
    url: https://unfoldcms.com
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://unfoldcms.com/docs/api/overview
    checkedAt: 2026-10-23
  - field: i18n
    url: https://unfoldcms.com
    checkedAt: 2026-10-23
  - field: license
    url: https://unfoldcms.com
    checkedAt: 2026-10-23
  - field: license
    url: https://unfoldcms.com/docs/getting-started
    checkedAt: 2026-10-23
  - field: urls
    url: https://unfoldcms.com/pricing
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://unfoldcms.com
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://unfoldcms.com/docs/getting-started
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: CMS
ai: authored
---

UnfoldCMS is a self-hosted content management system built on Laravel, with an admin panel written in React. Themes use Blade templates, a public REST API serves content for headless use, and roles and permissions control what each user can do. The documentation describes a web installer as well as a Composer install, and says it works on standard PHP hosting. Its paid tiers are one-time payments, and a free Community tier covers personal use.

## Worth knowing

The homepage footer calls the software open-source under the MIT License, while the getting-started page calls it source-available under a one-time commercial license. The GitHub repository the homepage links returns not found, so this record stays a stub until the source or the license statement can be settled.
