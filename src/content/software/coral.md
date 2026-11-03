---
id: coral
name: Coral
urls:
  home: https://coralproject.net
  repository: https://github.com/coralproject/talk
  docs: https://docs.coralproject.net/
  pricing: https://coralproject.net/pricing/
category:
  - community
description: Open-source commenting platform that a website embeds to host comments, moderation and community tools.
status: active
maintainer: Vox Media, Inc
maintainerType: company
firstRelease: 2016
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
databases:
  - mongodb
adminUi: true
headlessApi:
  - graphql
i18n: yes, a default language set in the admin
runsAs:
  - always-on
installMethod: Docker image coralproject/talk
licenseModel: open-source
license: Apache-2.0
currentMajor: "9"
latestReleaseDate: 2026-07-07
githubStargazers: 2006
contributors: 60
social:
  x: https://twitter.com/coralproject
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://coralproject.net/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/coralproject/talk
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.coralproject.net/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/coralproject/talk/v9.11.8/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/coralproject/talk
    checkedAt: 2026-11-03
  - field: category
    url: https://coralproject.net/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.coralproject.net/development
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://raw.githubusercontent.com/coralproject/talk/v9.11.8/server/package.json
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.coralproject.net/environment-variables
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.coralproject.net/environment-variables
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.coralproject.net/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.coralproject.net/
    checkedAt: 2026-11-03
  - field: license
    url: https://raw.githubusercontent.com/coralproject/talk/v9.11.8/LICENSE
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/coralproject/talk/develop/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://coralproject.net/pricing/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.coralproject.net/administration
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.coralproject.net/api/schema
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.coralproject.net/sso
    checkedAt: 2026-11-03
  - field: i18n
    url: https://docs.coralproject.net/administration
    checkedAt: 2026-11-03
  - field: i18n
    url: https://coralproject.net/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/coralproject/talk
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/coralproject/talk/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/coralproject/talk/releases?per_page=100&page=3
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/coralproject/talk/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/coralproject/talk/releases
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Coral is a comment platform that a site embeds to show and manage its comment stream. The embed script loads from the Coral server and renders the thread into an element on the page, while moderation settings, user roles and login options are set in the server's admin area. The server runs as a long-lived Node process that listens for HTTP and WebSocket requests, uses MongoDB and Redis, and can hold several tenants in one installation. It installs from a Docker image or from source. Vox Media maintains the project and offers a hosted version alongside the open-source code.

## Worth knowing

Logins can come from the host site through a JWT token or an OpenID Connect provider, so the site's own user database stays the source of truth for those accounts. Spam and toxicity filters call third-party services when they are enabled. The hosted version is run by the Coral Project, and the open-source server is the self-hosted route.
