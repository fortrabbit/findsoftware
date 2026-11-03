---
id: grist
name: Grist
urls:
  home: https://www.getgrist.com/
  repository: https://github.com/gristlabs/grist-core
  docs: https://support.getgrist.com/
  pricing: https://www.getgrist.com/pricing/
category:
  - admin-panel
description: Relational spreadsheet that combines spreadsheet formulas with database tables, self-hostable as grist-core and available as a hosted service.
status: active
maintainer: Grist Labs Inc.
maintainerType: company
firstRelease: 2021
hqCountry: US
language: javascript
runtime:
  - python
hosting:
  - python
databases:
  - sqlite
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, translated to many languages
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2026-10-29
githubStargazers: 12043
contributors: 163
social:
  x: https://twitter.com/getgrist
  bluesky: https://bsky.app/profile/getgrist.com
  discord: https://discord.gg/MYKpYQ3fbP
  forum: https://community.getgrist.com/
  facebook: https://www.facebook.com/getgrist
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.getgrist.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/gristlabs/grist-core
    checkedAt: 2026-11-03
  - field: urls
    url: https://support.getgrist.com/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.getgrist.com/terms/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.getgrist.com/terms/
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/gristlabs/grist-core
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/gristlabs/grist-core/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.getgrist.com/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/gristlabs/grist-core/releases/tag/v1.7.22
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/gristlabs/grist-core/releases/latest
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/gristlabs/grist-core/commits/v0.1.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/gristlabs/grist-core
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/gristlabs/grist-core/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Grist is a relational spreadsheet that combines spreadsheet formulas with database tables. Formulas can be written in Python. Each document is a SQLite file, and the server runs as a Docker container or from a source build. It serves a browser interface, an Admin Panel at /admin and a REST API.

A document with public access can be embedded on another site with HTML code, and grist-static is a separate build for displaying spreadsheets on a website without back-end support. Grist Labs, a company based in New York, maintains it and also offers a hosted service at getgrist.com.

## Worth knowing

Grist Labs sells a full edition with features that grist-core does not include, among them single sign-on through OIDC or SAML, audit log streaming and automations. The default Docker image holds extensions for that edition under a non-open-source license, inactive in the Community edition. The gristlabs/grist-oss image holds only open-source code.
