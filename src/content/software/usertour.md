---
id: usertour
name: Usertour
urls:
  home: https://www.usertour.io
  repository: https://github.com/usertour/usertour
  docs: https://docs.usertour.io
  pricing: https://www.usertour.io/pricing
category:
  - ui-library
  - forms
description: Open-source user onboarding platform for in-app product tours, checklists and surveys.
status: active
maintainer: Usertour, Inc.
maintainerType: company
firstRelease: 2024
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, flows, checklists and banners can be translated and delivered by the user's locale
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: MIT, Usertour Enterprise License
currentMajor: "0"
latestReleaseDate: 2026-10-30
githubStargazers: 2332
npmWeeklyDownloads: 39128
contributors: 7
social:
  x: https://x.com/usertourio
  discord: https://discord.gg/WPVJPX8fJh
  forum: https://github.com/usertour/usertour/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.usertour.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/usertour/usertour
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/usertour/usertour/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://registry.npmjs.org/usertour.js
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/usertour/usertour/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/usertour/usertour
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/usertour/usertour/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.usertour.io/open-source/self-hosting
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/usertour/usertour/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.usertour.io/open-source/coolify-deployment
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/usertour/usertour/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/usertour/usertour/blob/main/LICENSE.enterprise
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.usertour.io/pricing
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.usertour.io/open-source/system-admin
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/usertour/usertour
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/usertour/usertour/contributors
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/usertour.js
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/usertour/usertour/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/usertour/usertour/releases
    checkedAt: 2026-11-03
  - field: i18n
    url: https://docs.usertour.io/how-to-guides/localization
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.usertour.io/api-reference-v2/introduction
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.usertour.io/open-source/env
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.usertour.io/open-source/env
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
---

Usertour adds in-app onboarding to a web app: product tours, checklists and surveys. The app connects through the usertour.js SDK, which is installed from npm. The software can run on the team's own infrastructure with Docker, and the same product is also offered as a hosted cloud service. The README describes an MCP server that lets an AI assistant build flows.

## Worth knowing

A self-hosted instance needs PostgreSQL and Redis. The Docker documentation recommends running them as separate services in production and pointing the application at them through environment variables.

Code that controls features for Business and Enterprise plans, such as SSO, is under a separate enterprise license. Production use of that code requires a Business or Enterprise subscription.
