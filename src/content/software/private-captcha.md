---
id: private-captcha
name: Private Captcha
urls:
  home: https://privatecaptcha.com
  repository: https://github.com/PrivateCaptcha/PrivateCaptcha
  docs: https://docs.privatecaptcha.com
  pricing: https://privatecaptcha.com/#pricing
category:
  - forms
description: Proof-of-work CAPTCHA service that protects forms and APIs, offered as a managed service and as a self-hosted Docker stack.
status: stub
maintainer: Intmaker OÜ
maintainerType: company
firstRelease: 2025
hqCountry: EE
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
runsAs:
  - always-on
installMethod: docker
licenseModel: source-available
license: PolyForm-Noncommercial-1.0.0, Private Captcha EULA for commercial use of the enterprise edition
currentMajor: "1"
latestReleaseDate: 2026-10-20
githubStargazers: 199
contributors: 10
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://privatecaptcha.com/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/PrivateCaptcha/PrivateCaptcha
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.privatecaptcha.com/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://privatecaptcha.com/legal/terms-and-conditions/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/PrivateCaptcha/PrivateCaptcha/blob/v1.46.1/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://privatecaptcha.com/about/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://privatecaptcha.com/legal/terms-and-conditions/
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/PrivateCaptcha/PrivateCaptcha
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.privatecaptcha.com/docs/deployment/quickstart/
    checkedAt: 2026-11-03
  - field: category
    url: https://privatecaptcha.com/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/PrivateCaptcha/PrivateCaptcha/blob/v1.46.1/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/PrivateCaptcha/self-hosting
    checkedAt: 2026-11-03
  - field: urls
    url: https://privatecaptcha.com/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.privatecaptcha.com/docs/deployment/configuration/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.privatecaptcha.com/docs/deployment/configuration/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.privatecaptcha.com/docs/deployment/quickstart/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.privatecaptcha.com/docs/deployment/quickstart/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.privatecaptcha.com/docs/deployment/quickstart/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/PrivateCaptcha/PrivateCaptcha
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/PrivateCaptcha/PrivateCaptcha
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/PrivateCaptcha/PrivateCaptcha/releases/tag/v1.46.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/PrivateCaptcha/PrivateCaptcha/releases/tag/v1.46.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/PrivateCaptcha/PrivateCaptcha/tags
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Private Captcha is a CAPTCHA service that protects forms and APIs with a proof-of-work task. The homepage describes the task as an invisible cryptographic one. The server is written in Go, uses PostgreSQL for its backend database and ClickHouse as a second database.

The [self-hosting repository](https://github.com/PrivateCaptcha/self-hosting) runs the stack with Docker, and the [quickstart](https://docs.privatecaptcha.com/docs/deployment/quickstart/) describes a bootstrap script that writes the environment file. The server listens on port 8080 by default, and the admin portal is a web interface that the operator logs into with an admin email address. Intmaker OÜ, the company behind the project, also runs the managed service.

## Worth knowing

The PolyForm Noncommercial license covers the community edition for non-commercial use, and commercial use of the self-hosted software needs a license under the company's EULA. The enterprise edition is a paid self-hosted edition, and the community edition needs a license key in its environment.
