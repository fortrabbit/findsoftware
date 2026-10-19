---
id: ghost
name: Ghost
urls:
  home: https://ghost.org
  repository: https://github.com/TryGhost/Ghost
  docs: https://docs.ghost.org
  pricing: https://ghost.org/pricing/
  plugins: https://ghost.org/marketplace/
category:
  - cms
  - email
description: Open-source publishing platform for websites, email newsletters and paid memberships, with Handlebars themes and a read-only content API.
status: active
maintainer: Ghost Foundation
maintainerType: foundation
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 22
basedOn:
  - express
contentStore:
  - database
databases:
  - mysql
  - sqlite
adminUi: true
headlessApi:
  - rest
templating: handlebars
i18n: yes, theme translation via locales files and the site language setting
runsAs:
  - always-on
renderingModes:
  - server
installMethod: ghost-cli (npm install ghost-cli@latest -g, ghost install), docker compose (preview)
licenseModel: open-source
license: MIT, MIT
currentMajor: "6"
latestReleaseDate: 2026-10-15
githubStargazers: 55562
contributors: 369
social:
  forum: https://forum.ghost.org
wikidata: Q16251204
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - field: name
    url: https://ghost.org/
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/TryGhost/Ghost
    checkedAt: 2026-10-18
  - field: urls
    url: https://api.github.com/repos/TryGhost/Ghost
    checkedAt: 2026-10-18
  - field: urls
    url: https://ghost.org/
    checkedAt: 2026-10-18
  - field: maintainer
    url: https://ghost.org/about/
    checkedAt: 2026-10-18
  - field: maintainerType
    url: https://ghost.org/about/
    checkedAt: 2026-10-18
  - field: category
    url: https://ghost.org/
    checkedAt: 2026-10-18
  - field: basedOn
    url: https://registry.npmjs.org/ghost/latest
    checkedAt: 2026-10-18
  - field: language
    url: https://api.github.com/repos/TryGhost/Ghost
    checkedAt: 2026-10-18
  - field: runtime
    url: https://docs.ghost.org/hosting/
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://registry.npmjs.org/ghost/latest
    checkedAt: 2026-10-18
  - field: runtimeMin
    url: https://docs.ghost.org/faq/node-versions
    checkedAt: 2026-10-18
  - field: contentStore
    url: https://docs.ghost.org/hosting/
    checkedAt: 2026-10-18
  - field: databases
    url: https://docs.ghost.org/hosting/
    checkedAt: 2026-10-18
  - field: databases
    url: https://registry.npmjs.org/ghost/latest
    checkedAt: 2026-10-18
  - field: adminUi
    url: https://docs.ghost.org/themes/helpers/utility/translate
    checkedAt: 2026-10-18
  - field: headlessApi
    url: https://docs.ghost.org/content-api
    checkedAt: 2026-10-18
  - field: templating
    url: https://docs.ghost.org/themes
    checkedAt: 2026-10-18
  - field: i18n
    url: https://docs.ghost.org/themes/helpers/utility/translate
    checkedAt: 2026-10-18
  - field: renderingModes
    url: https://docs.ghost.org/themes
    checkedAt: 2026-10-18
  - field: installMethod
    url: https://docs.ghost.org/install/ubuntu
    checkedAt: 2026-10-18
  - field: license
    url: https://api.github.com/repos/TryGhost/Ghost
    checkedAt: 2026-10-18
  - field: license
    url: https://registry.npmjs.org/ghost/latest
    checkedAt: 2026-10-18
  - field: licenseModel
    url: https://api.github.com/repos/TryGhost/Ghost
    checkedAt: 2026-10-18
  - field: urls
    url: https://ghost.org/pricing/
    checkedAt: 2026-10-18
  - field: latestReleaseDate
    url: https://api.github.com/repos/TryGhost/Ghost/releases/latest
    checkedAt: 2026-10-18
  - field: githubStargazers
    url: https://api.github.com/repos/TryGhost/Ghost
    checkedAt: 2026-10-18
  - field: contributors
    url: https://api.github.com/repos/TryGhost/Ghost/contributors
    checkedAt: 2026-10-18
  - field: urls
    url: https://ghost.org/integrations/
    checkedAt: 2026-10-18
  - field: wikidata
    url: https://www.wikidata.org/wiki/Special:EntityData/Q16251204.json
    checkedAt: 2026-10-18
  - field: runsAs
    url: https://docs.ghost.org/install/ubuntu
    checkedAt: 2026-10-19
figure:
  emoji: 📝
  color: "#f4d35e"
  textColor: "#1a1a1a"
  text: JavaScript · CMS
ai: authored
packagistDownloads: null
---

Ghost is a Node.js publishing platform for websites, newsletters and paid memberships, built on Express and Knex, with MySQL as the production database. Themes are written in Handlebars and rendered on the server. A read-only Content API serves other frontends, and a separate Admin API is also provided. The documented production setup is ghost-cli on an Ubuntu LTS server behind NGINX. The Ghost Foundation, a non-profit founded in 2013, maintains it. The [hosting guide](https://docs.ghost.org/hosting/) lists the server requirements.

## Worth knowing

Ghost renders its own pages, so it runs as a server process rather than producing static files. The official Docker Compose setup is labeled preview, and self-hosting ActivityPub and Tinybird analytics requires it. Ghost(Pro) is the project's hosted offering.
