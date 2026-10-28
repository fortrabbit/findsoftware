---
id: boulder
name: Boulder
urls:
  repository: https://github.com/letsencrypt/boulder
category:
  - web-server
description: ACME-based certificate authority written in Go, the software that runs Let's Encrypt.
status: stub
maintainer: Internet Security Research Group
firstRelease: 2022
language: go
licenseModel: open-source
license: MPL-2.0
latestReleaseDate: 2026-10-27
githubStargazers: 5776
contributors: 133
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/letsencrypt/boulder
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://letsencrypt.org/about/
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/letsencrypt/boulder/blob/main/README.md
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/letsencrypt/boulder
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/letsencrypt/boulder/blob/main/README.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/letsencrypt/boulder/blob/main/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/letsencrypt/boulder/releases
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/letsencrypt/boulder/releases
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/letsencrypt/boulder
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/letsencrypt/boulder/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Boulder is an ACME-based certificate authority, written in Go. Its README says it is the software that runs Let's Encrypt, and that it verifies an applicant controls an identifier before it issues a certificate.

The README also says the software is intended only to support the Web PKI, that the Docker development environment is not suitable for production use, and that organizations evaluating it for production should look at another project.

## Worth knowing

The README describes the software's use for its operator and does not describe a use for site owners, so the record is a stub. The project has no homepage of its own; the service it runs is provided from letsencrypt.org.
