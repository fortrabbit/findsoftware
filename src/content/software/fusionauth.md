---
id: fusionauth
name: FusionAuth
urls:
  home: https://fusionauth.io
  repository: https://github.com/FusionAuth/fusionauth-containers
  docs: https://fusionauth.io/docs/
  pricing: https://fusionauth.io/pricing
category:
  - auth
description: Customer identity and access management server, self-hosted or hosted by FusionAuth, with a free Community edition.
status: active
maintainer: Inversoft, LLC.
maintainerType: company
firstRelease: 2018
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
  - mysql
adminUi: true
headlessApi:
  - rest
templating: Freemarker
i18n: localization and translation of interface text
runsAs:
  - always-on
installMethod: docker compose with fusionauth/fusionauth-app, PostgreSQL and OpenSearch
licenseModel: commercial
license: FusionAuth Customer License Agreement
currentMajor: "1"
latestReleaseDate: 2026-10-28
githubStargazers: 240
contributors: 25
social:
  x: https://x.com/fusionauth
  bluesky: https://bsky.app/profile/fusionauth.io
  forum: https://fusionauth.io/community/forum/
  youtube: https://www.youtube.com/c/FusionAuth
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://fusionauth.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/FusionAuth/fusionauth-containers
    checkedAt: 2026-11-03
  - field: urls
    url: https://fusionauth.io/docs/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://fusionauth.io/license
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://fusionauth.io/license
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://fusionauth.io/docs/release-notes
    checkedAt: 2026-11-03
  - field: category
    url: https://fusionauth.io/docs/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://fusionauth.io/docs/get-started/download-and-install/reference/system-requirements
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://fusionauth.io/docs/get-started/download-and-install/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://fusionauth.io/docs/get-started/download-and-install/fusionauth-app
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://fusionauth.io/docs/get-started/download-and-install/kubernetes
    checkedAt: 2026-11-03
  - field: databases
    url: https://fusionauth.io/docs/get-started/download-and-install/system-requirements
    checkedAt: 2026-11-03
  - field: databases
    url: https://fusionauth.io/docs/get-started/download-and-install/system-requirements
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://fusionauth.io/docs/get-started/download-and-install/start-and-stop
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://fusionauth.io/docs/get-started/download-and-install/docker
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://fusionauth.io/docs/apis/
    checkedAt: 2026-11-03
  - field: templating
    url: https://fusionauth.io/docs/apis/themes/advanced-themes
    checkedAt: 2026-11-03
  - field: i18n
    url: https://fusionauth.io/docs/get-started/core-concepts/localization-and-internationalization
    checkedAt: 2026-11-03
  - field: urls
    url: https://fusionauth.io/
    checkedAt: 2026-11-03
  - field: license
    url: https://fusionauth.io/license
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://fusionauth.io/license
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://fusionauth.io/docs/release-notes
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://fusionauth.io/docs/release-notes
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/FusionAuth/fusionauth-containers
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/FusionAuth/fusionauth-containers/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
renderingModes: null
---

FusionAuth is a customer identity and access management server. Applications send users through its OAuth 2.0 and OpenID Connect endpoints, and the admin UI and the REST API manage the instance. It also accepts logins from external SAML v2 identity providers and can authenticate against an LDAP directory. The server bundles its own Java runtime and needs PostgreSQL or MySQL, plus an OpenSearch or Elasticsearch search service. It installs from Docker Compose, from packages on Linux, macOS and Windows, or on Kubernetes. Advanced themes, which customize the HTML, CSS and messages, are written as Freemarker templates. FusionAuth Cloud runs an instance for those who choose a hosted service.

## Worth knowing

The server is distributed under the FusionAuth Customer License Agreement. The Community edition is free, and advanced features are enabled through plans that use a license key entered on the instance. The GitHub repository holds container definitions, not the server's source.
