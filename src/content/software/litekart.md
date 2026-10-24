---
id: litekart
name: Litekart
urls:
  home: https://litekart.in
  repository: https://github.com/itswadesh/gocommerce
  docs: https://api.litekart.in/docs
  pricing: https://litekart.in/pricing
category:
  - e-commerce
  - backend
description: Self-hosted ecommerce platform whose Go backend, GoCommerce, serves the API and an admin panel for a separate SvelteKit storefront.
status: active
maintainer: Misiki Technologies LLP
maintainerType: individual
firstRelease: 2026
language: go
runtime:
  - binary
hosting:
  - binary
databases:
  - postgres
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: docker compose up --build, or go run ./cmd/gocommerce serve
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-23
githubStargazers: 7
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://litekart.in
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/itswadesh/gocommerce
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/itswadesh/gocommerce
    checkedAt: 2026-10-23
  - field: category
    url: https://api.github.com/repos/itswadesh/gocommerce
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/itswadesh/gocommerce/main/docker-compose.yml
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/itswadesh/gocommerce/main/README.md
    checkedAt: 2026-10-23
  - field: databases
    url: https://raw.githubusercontent.com/itswadesh/gocommerce/main/README.md
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://raw.githubusercontent.com/itswadesh/gocommerce/main/README.md
    checkedAt: 2026-10-23
  - field: headlessApi
    url: https://raw.githubusercontent.com/itswadesh/gocommerce/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/itswadesh/gocommerce/main/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/itswadesh/gocommerce/main/LICENSE
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/itswadesh/gocommerce/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/itswadesh/gocommerce/releases
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/itswadesh/gocommerce/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/itswadesh/gocommerce
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/itswadesh/gocommerce/contributors
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://litekart.in/about-us
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/itswadesh/gocommerce/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://litekart.in
    checkedAt: 2026-10-23
  - field: urls
    url: https://litekart.in
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Litekart is a self-hosted ecommerce platform whose backend, GoCommerce, is a commerce engine written in Go. The backend runs as a single binary that serves the API and a full admin panel, and it stores its data in PostgreSQL. A separate SvelteKit storefront, which has its own record, is part of the same product. The repository's Docker Compose file starts the backend, and a single install can run many stores.

## Worth knowing

Litekart is a product name over two repositories, the storefront and the backend. The pricing page describes paid options for white-label branding and managed deployment, which are services and not a licensed edition.
