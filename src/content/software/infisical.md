---
id: infisical
name: Infisical
urls:
  home: https://infisical.com
  repository: https://github.com/Infisical/infisical
  docs: https://infisical.com/docs/documentation/getting-started/introduction
  pricing: https://infisical.com/pricing
category:
  - auth
description: Open-source platform for managing application secrets, certificates and cryptographic keys, with a CLI, SDKs and a self-hostable server alongside Infisical Cloud.
status: active
maintainer: Infisical Inc.
maintainerType: company
firstRelease: 2022
hqCountry: US
language: javascript
databases:
  - postgres
adminUi: true
installMethod: docker
licenseModel: open-core
license: MIT, Infisical license for the ee directories
currentMajor: "0"
latestReleaseDate: 2026-11-02
githubStargazers: 30230
contributors: 251
social:
  x: https://x.com/infisical
  forum: https://community.infisical.com/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://infisical.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Infisical/infisical
    checkedAt: 2026-11-03
  - field: urls
    url: https://infisical.com/docs/documentation/getting-started/introduction
    checkedAt: 2026-11-03
  - field: urls
    url: https://infisical.com/pricing
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/Infisical/infisical/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/Infisical/infisical/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://infisical.com/terms/enterprise
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/Infisical/infisical/releases/tag/v0.0.1
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/Infisical/infisical
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/Infisical/infisical/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Infisical/infisical/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Infisical/infisical/blob/main/README.md
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/Infisical/infisical/releases/tag/v0.167.5
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/Infisical/infisical/releases/tag/v0.167.5
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/Infisical/infisical
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/Infisical/infisical
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: databases
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: databases
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://infisical.com/docs/self-hosting/overview
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Infisical stores application secrets, certificates and cryptographic keys in one platform, and applications fetch secrets from it on demand through language SDKs. The [self-hosting overview](https://infisical.com/docs/self-hosting/overview) describes the server running as a single container, a Docker Compose stack, a Helm chart on Kubernetes, a Linux package, or an AWS or Google Cloud template, with PostgreSQL and Redis alongside it. Each instance has a server admin console for instance-wide settings and user management.

## Worth knowing

The repository is MIT-licensed apart from its `ee` directories, which hold enterprise features that need a license key. The [enterprise licensing page](https://infisical.com/docs/self-hosting/ee) says those features are paid, and an instance running with a license key communicates with the vendor's license server to validate it. The self-hosting overview names Infisical Cloud as the hosted alternative.
