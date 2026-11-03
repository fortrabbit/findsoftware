---
id: ory-polis
name: Ory Polis
urls:
  home: https://www.ory.sh/polis
  repository: https://github.com/ory/polis
  docs: https://www.ory.com/docs/oss/polis
  pricing: https://www.ory.com/pricing
category:
  - auth
description: Single sign-on service, written in TypeScript, that bridges SAML and OIDC identity providers to an OAuth 2.0 flow and provides SCIM 2.0 directory sync.
status: active
maintainer: Ory Corp
maintainerType: company
firstRelease: 2021
hqCountry: US
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 18
databases:
  - postgres
  - mysql
  - sqlserver
  - mariadb
  - sqlite
  - mongodb
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker
licenseModel: open-core
license: Apache-2.0
latestReleaseDate: 2026-03-20
githubStargazers: 2271
contributors: 34
social:
  x: https://x.com/orycorp
  forum: https://github.com/ory/polis/discussions
  youtube: https://www.youtube.com/@OryCorp
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://github.com/ory/polis/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.sh/polis
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/ory/polis
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.com/docs/oss/polis
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/ory/polis
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/ory/polis
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.ory.com/docs/polis/install
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/ory/polis/blob/v26.2.0/package.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/polis/guides/service
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/polis/guides/service
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.ory.com/docs/polis/guides/npm-library
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/ory/polis/releases/tag/v26.2.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/ory/polis/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/ory/polis
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/ory/polis/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.ory.com/legal/privacy
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.ory.com/legal/privacy
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/ory/polis/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://www.ory.com/docs/polis/guides/service
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://github.com/ory/polis/blob/main/README.md
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.ory.com/pricing
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/ory/polis/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

Ory Polis is a single sign-on service written in TypeScript. It takes SAML and OIDC identity providers and presents their login to an application as a standard OAuth 2.0 flow. The README says it was formerly known as BoxyHQ Jackson, and its Docker image and npm package still use that name. It runs as a separate Next.js service with an admin portal for managing SSO and Directory Sync connections, or it can be embedded in an application as an npm library. Directory sync uses the SCIM 2.0 protocol to automate provisioning and de-provisioning of users. The [service guide](https://www.ory.com/docs/polis/guides/service) lists the databases the service can use.

## Worth knowing

An Enterprise License build adds features the open-source version does not have, and the Ory Network offers SAML and SCIM as a hosted service.
