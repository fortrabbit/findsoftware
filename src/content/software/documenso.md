---
id: documenso
name: Documenso
urls:
  home: https://documenso.com
  repository: https://github.com/documenso/documenso
  docs: https://docs.documenso.com
  pricing: https://documenso.com/pricing
category:
  - media
description: Document signing application that sends PDFs for electronic signature, self-hosted under AGPL-3.0 or run as a cloud service.
status: active
maintainer: Documenso Inc.
maintainerType: company
firstRelease: 2023
language: javascript
runtime:
  - node
hosting:
  - node
runtimeMin: node 24
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
i18n: translations stored as PO files per language
runsAs:
  - always-on
installMethod: docker image documenso/documenso
licenseModel: open-core
license: AGPL-3.0, AGPL-3.0 for the Community Edition, commercial license for the Enterprise Edition
currentMajor: "2"
latestReleaseDate: 2026-10-22
githubStargazers: 15636
contributors: 180
social:
  x: https://x.com/documenso
  mastodon: https://mastodon.social/@documenso
  discord: https://documen.so/discord
  forum: https://github.com/documenso/documenso/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: name
    url: https://documenso.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://documenso.com
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/documenso/documenso
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.documenso.com/docs/self-hosting
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://documenso.com/privacy
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/documenso/documenso/releases/tag/0.9-developer-preview
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/documenso/documenso/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/documenso/documenso
    checkedAt: 2026-11-03
  - field: runtime
    url: https://docs.documenso.com/docs/self-hosting/deployment/manual
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://github.com/documenso/documenso/blob/v2.21.1/package.json
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.documenso.com/docs/self-hosting/deployment/docker
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.documenso.com/docs/self-hosting/deployment/docker-compose
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.documenso.com/docs/self-hosting/deployment/railway
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.documenso.com/docs/self-hosting/deployment/kubernetes
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.documenso.com/docs/self-hosting/deployment/manual
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.documenso.com/docs/self-hosting/deployment/manual
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.documenso.com/docs/self-hosting/getting-started/requirements
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://docs.documenso.com/docs/developers/api
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/documenso/documenso
    checkedAt: 2026-11-03
  - field: license
    url: https://docs.documenso.com/docs/policies/licenses
    checkedAt: 2026-11-03
  - field: license
    url: https://docs.documenso.com/docs/policies/enterprise-edition
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://docs.documenso.com/docs/policies/licenses
    checkedAt: 2026-11-03
  - field: urls
    url: https://documenso.com/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/documenso/documenso/releases/tag/v2.21.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/documenso/documenso/releases/tag/v2.21.1
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/documenso/documenso
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/documenso/documenso/contributors
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.documenso.com/docs/users/organisations/members
    checkedAt: 2026-11-03
  - field: i18n
    url: https://docs.documenso.com/docs/developers/contributing/contributing-translations
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
renderingModes: null
packagistDownloads: null
---

Documenso is a document signing application that sends PDF documents out for electronic signature and records the signatures. It can be self-hosted with Docker, Docker Compose, Railway, Kubernetes or a manual Node.js setup, as the [self-hosting guide](https://docs.documenso.com/docs/self-hosting) describes, and the same project is offered as Documenso Cloud. The project documents a REST API and a webhooks guide. Documents are stored in PostgreSQL by default.

## Worth knowing

The Community Edition is licensed under AGPL-3.0. Enterprise features, including single sign-on with SAML and OIDC, come with a commercial Enterprise license, which removes the AGPL source disclosure requirement. Documenso does not ship a signing certificate, and document signing fails until one is configured.
