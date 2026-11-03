---
id: opensign
name: OpenSign
urls:
  home: https://www.opensignlabs.com
  repository: https://github.com/OpenSignLabs/OpenSign
  docs: https://docs.opensignlabs.com
category:
  - media
description: Open-source electronic signature application for PDF documents, with a REST API and webhooks that an application can use to send documents for signing.
status: active
maintainer: Qik Innovations Private Limited
maintainerType: company
firstRelease: 2023
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - mongodb
installMethod: docker
licenseModel: open-core
license: AGPL-3.0, separate license for apps/OpenSignServer/cloud/customRoute, if that directory exists (license not named in the file)
currentMajor: "3"
latestReleaseDate: 2026-10-30
githubStargazers: 7215
contributors: 36
social:
  x: https://www.twitter.com/opensignhq
  discord: https://discord.com/invite/xe9TDuyAyj
  facebook: https://www.facebook.com/profile.php?id=61551030403669
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.opensignlabs.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/OpenSignLabs/OpenSign
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.opensignlabs.com
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/OpenSignLabs/OpenSign
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/OpenSignLabs/OpenSign/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/OpenSignLabs/OpenSign
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/OpenSignLabs/OpenSign
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/OpenSignLabs/OpenSign/blob/main/apps/OpenSignServer/package.json
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/OpenSignLabs/OpenSign/releases
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.opensignlabs.com/terms-and-conditions
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.opensignlabs.com/docs/self-host/docker/run-locally/
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/OpenSignLabs/OpenSign
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/OpenSignLabs/OpenSign/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/OpenSignLabs/OpenSign/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/OpenSignLabs/OpenSign
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/OpenSignLabs/OpenSign
    checkedAt: 2026-11-03
ai: authored
contentStore: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

OpenSign is an electronic signature application for PDF documents. Besides the web application, it has a REST API and webhooks, so an application can create documents, send signature requests and track them. The README lists multi-signer support with signing links, templates, and audit trails with a completion certificate. The Docker install downloads a compose file and a Caddyfile for the operator's own domain, and the stack includes a MongoDB container.

Qik Innovations Private Limited develops and maintains OpenSign and runs a hosted service at app.opensignlabs.com next to the self-hosted build.

## Worth knowing

The default MongoDB container does not keep data across restarts unless the operator supplies a connection URL for a persistent database. The docs warn that the default configuration does not enable MongoDB authentication, so port 27017 must not be exposed to the internet. The repository is AGPLv3, and one directory of the repository is under a separate license that the LICENSE file does not name.
