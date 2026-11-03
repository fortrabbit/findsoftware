---
id: docuseal
name: DocuSeal
urls:
  home: https://www.docuseal.com
  repository: https://github.com/docusealco/docuseal
  docs: https://www.docuseal.com/docs
  pricing: https://www.docuseal.com/pricing
category:
  - media
description: Document signing platform that turns PDFs into fillable forms, collects signatures online, and can be self-hosted.
status: active
maintainer: DocuSeal, LLC
maintainerType: company
firstRelease: 2023
hqCountry: US
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 4.0
databases:
  - sqlite
  - postgres
  - mysql
adminUi: true
headlessApi:
  - rest
i18n: 7 UI languages, signing in 14 languages
installMethod: docker run
licenseModel: open-core
license: AGPL-3.0, AGPL-3.0 with Section 7(b) additional terms requiring DocuSeal attribution
currentMajor: "3"
latestReleaseDate: 2026-11-02
githubStargazers: 18982
contributors: 6
social:
  x: https://twitter.com/docusealco
  bluesky: https://bsky.app/profile/docuseal.com
  discord: https://discord.gg/qygYCDGck9
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://www.docuseal.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.docuseal.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/docusealco/docuseal
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.docuseal.com/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.docuseal.com/terms
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://www.docuseal.com/contact
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/docusealco/docuseal/releases/tag/1.0.0
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/docusealco/docuseal/blob/master/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/docusealco/docuseal
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/docusealco/docuseal/blob/3.3.5/Gemfile
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/docusealco/docuseal/blob/3.3.5/Gemfile
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/docusealco/docuseal/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/docusealco/docuseal/blob/master/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.docuseal.com/on-premises
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.docuseal.com/docs/deploying-docuseal-on-google-cloud-run
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.docuseal.com/docs/deploying-docuseal-on-azure-web-apps
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/docusealco/docuseal/blob/master/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/docusealco/docuseal/blob/master/README.md
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://www.docuseal.com/on-premises
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://www.docuseal.com/on-premises
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/docusealco/docuseal/blob/master/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/docusealco/docuseal
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/docusealco/docuseal/blob/master/LICENSE_ADDITIONAL_TERMS
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.docuseal.com/pricing
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.docuseal.com/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/docusealco/docuseal/releases/tag/3.3.5
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/docusealco/docuseal/releases/tag/3.3.5
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/docusealco/docuseal
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/docusealco/docuseal/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

DocuSeal is a platform for digital document signing and processing, described by its README as open source. It runs as a web app with user management, and its REST API and webhooks support automation workflows. The Docker image stores data in SQLite by default, and the README says PostgreSQL or MySQL can be used instead.

Installation is possible with `docker run`, with Docker Compose for a custom domain over HTTPS, or on a managed platform with a single click. The [documentation](https://www.docuseal.com/docs) covers the API and the embedded signing form.

## Worth knowing

Pro features, including white-label branding, user roles, and SSO with SAML, are sold as a Pro license for on-premises use, while the open source edition is free. The additional license terms require DocuSeal attribution to remain visible in interactive interfaces. DocuSeal Cloud is offered alongside the self-hosted software, and an EU Cloud runs on servers in Dublin, Ireland.
