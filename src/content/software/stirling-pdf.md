---
id: stirling-pdf
name: Stirling PDF
urls:
  home: https://www.stirling.com
  repository: https://github.com/Stirling-Tools/Stirling-PDF
  docs: https://docs.stirlingpdf.com
  pricing: https://stirling.com/pricing
category:
  - media
description: Open-core PDF editing and processing platform for self-hosted servers and a hosted service, with a REST API.
status: active
maintainer: Stirling PDF Inc.
maintainerType: company
firstRelease: 2023
hqCountry: US
language: javascript
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: yes, interface in 40+ languages
runsAs:
  - always-on
  - local
installMethod: docker
licenseModel: open-core
license: MIT, Stirling PDF User License (production use needs a license)
currentMajor: "3"
latestReleaseDate: 2026-10-24
githubStargazers: 95656
contributors: 300
social:
  x: https://x.com/StirlingPDF
  discord: https://discord.com/invite/Cn8pWhQRxZ
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.stirling.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.stirlingpdf.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/Stirling-Tools/Stirling-PDF
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/Stirling-Tools/Stirling-PDF
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/Stirling-Tools/Stirling-PDF/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.stirling.com/legal/privacy-policy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v0.3.0
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.stirlingpdf.com
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.stirlingpdf.com/Developers/API/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.stirlingpdf.com/Server/Install/JAR/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.stirlingpdf.com/Server/Install/Docker/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.stirlingpdf.com/Server/Install/Kubernetes/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.stirlingpdf.com/Server/Install/JAR/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.stirlingpdf.com/Server/Install/JAR/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.stirlingpdf.com
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.stirlingpdf.com/Server/Install/Docker/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/Stirling-Tools/Stirling-PDF/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.stirlingpdf.com/Server/Storage/Database/
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/Stirling-Tools/Stirling-PDF/blob/main/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.stirlingpdf.com/Server/Configuration/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Stirling-Tools/Stirling-PDF/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Stirling-Tools/Stirling-PDF/blob/main/engine/LICENSE
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.stirling.com/pricing
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/Stirling-Tools/Stirling-PDF
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/Stirling-Tools/Stirling-PDF
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.2.2
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.2.2
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
---

Stirling PDF is a PDF editing and processing platform. It runs as a desktop app, in the browser, or as a server on the user's own infrastructure, installed with Docker, a Helm chart for Kubernetes, or a Java JAR. Every server-side tool has a [REST API](https://docs.stirlingpdf.com/Developers/API/) endpoint, so a site or app can call PDF operations from its own code. The server keeps users and teams in a built-in H2 database or in PostgreSQL, and the interface is available in 40+ languages.

## Worth knowing

The license is open-core. The MIT license covers most of the code, but the engine and proprietary directories need a Stirling PDF User License for production use. A self-hosted server runs on a free plan until a Team or Enterprise license is added: an external PostgreSQL database needs Team, SAML single sign-on needs Enterprise, and Enterprise is sold by the company. A hosted service, Stirling Cloud, is offered alongside the self-hosted server.
