---
id: firecms
name: FireCMS
urls:
  home: https://firecms.co
  repository: https://github.com/firecmsco/firecms
  docs: https://firecms.co/docs
  pricing: https://firecms.co/pricing
category:
  - admin-panel
  - cms
description: Admin panel and CMS for Firebase Firestore data, built as a React and TypeScript application.
status: active
maintainer: FireCMS, S.L.
maintainerType: company
firstRelease: 2022
language: javascript
hosting:
  - static
basedOn:
  - react
databases:
  - mongodb
adminUi: true
i18n: admin interface in English, Spanish, German, French, Italian and Hindi
runsAs:
  - static
  - browser
renderingModes:
  - spa
installMethod: npx create-firecms-app
licenseModel: open-core
license: MIT, Apache-2.0, BUSL-1.1
currentMajor: "3"
latestReleaseDate: 2026-06-23
githubStargazers: 1281
npmWeeklyDownloads: 752
contributors: 40
social:
  discord: https://discord.gg/fxy7xsQm3m
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://firecms.co
    checkedAt: 2026-10-23
  - field: urls
    url: https://firecms.co/docs
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/firecmsco/firecms
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/firecmsco/firecms
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/firecmsco/firecms/blob/main/packages/firecms/LICENSE
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/firecmsco/firecms/blob/main/packages/firecms_cloud/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/firecmsco/firecms
    checkedAt: 2026-10-23
  - field: urls
    url: https://firecms.co/pricing
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://firecms.co/policy/privacy_policy
    checkedAt: 2026-10-23
  - field: language
    url: https://github.com/firecmsco/firecms
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/firecmsco/firecms
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://firecms.co/docs/self
    checkedAt: 2026-10-23
  - field: i18n
    url: https://firecms.co/docs/self/i18n
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://firecms.co/docs/self/deployment
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://firecms.co/docs/self/deployment
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://firecms.co/docs/self/security_best_practices
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://github.com/firecmsco/firecms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://firecms.co
    checkedAt: 2026-10-23
  - field: databases
    url: https://github.com/firecmsco/firecms/blob/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://firecms.co
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/firecmsco/firecms
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/firecmsco/firecms/contributors
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@firecms/core
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://github.com/firecmsco/firecms/releases/tag/v3.2.0
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://github.com/firecmsco/firecms/releases/tag/v3.2.0
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://github.com/firecmsco/firecms/releases/tag/v1.0.0
    checkedAt: 2026-10-23
figure:
  emoji: 🎛️
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · Admin
ai: authored
packagistDownloads: null
---

FireCMS is an admin panel for data in Firebase Firestore, written in React and TypeScript. It generates collection views and forms from a schema, and the schema is defined in code. The project is a single-page application with no server component, so the build output deploys to any static host. Content stays in the connected Firestore project, and custom React components can replace fields or add views. The docs list admin interface translations in six languages.

## Worth knowing

The README describes three editions. The core is MIT-licensed. PRO is self-hosted under the Business Source License 1.1 and adds a schema editor UI, import and export, entity history, a user management UI and AI features, per the README's edition table. Cloud is a managed version connected to a Firestore project. MongoDB support is listed for PRO only.
