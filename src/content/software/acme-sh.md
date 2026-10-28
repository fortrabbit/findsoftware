---
id: acme-sh
name: acme.sh
urls:
  home: https://acme.sh
  repository: https://github.com/acmesh-official/acme.sh
  docs: https://github.com/acmesh-official/acme.sh/wiki
category:
  - web-server
description: ACME protocol client written in POSIX shell that issues, installs and renews TLS certificates from ACME certificate authorities.
status: active
maintainer: ZeroSSL GmbH
maintainerType: company
firstRelease: 2016
hqCountry: AT
runsAs:
  - scheduled
installMethod: shell script fetched with curl
licenseModel: open-source
license: GPL-3.0
currentMajor: "3"
latestReleaseDate: 2026-09-20
githubStargazers: 47868
contributors: 378
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://acme.sh/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/acmesh-official/acme.sh
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/acmesh-official/acme.sh/wiki
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://zerossl.com/legal/imprint
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://zerossl.com/legal/imprint
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://zerossl.com/legal/imprint
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://github.com/acmesh-official/acme.sh/releases/tag/1.2.2
    checkedAt: 2026-10-28
  - field: category
    url: https://acme.sh/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/acmesh-official/acme.sh
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/acmesh-official/acme.sh
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/acmesh-official/acme.sh/wiki/Run-acme.sh-in-docker
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/acmesh-official/acme.sh
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/acmesh-official/acme.sh/blob/master/LICENSE.md
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/acmesh-official/acme.sh/blob/master/LICENSE.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://github.com/acmesh-official/acme.sh/releases/tag/3.1.6
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://github.com/acmesh-official/acme.sh/releases/tag/3.1.6
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/acmesh-official/acme.sh
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/acmesh-official/acme.sh/contributors?per_page=1
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

acme.sh is an ACME protocol client written in POSIX shell. It requests and renews TLS certificates from certificate authorities that support the ACME protocol. It is installed with a script fetched by curl, with a git clone, or with a Docker image from the GitHub Container Registry. The client runs from a daily cron job that the installer creates, which checks certificates and renews them when needed. It runs in a POSIX shell with curl or wget.

## Worth knowing

The project's homepage is run by ZeroSSL, which sponsors and maintains acme.sh and sells the hosted certificate services that the homepage advertises. ZeroSSL is the default certificate authority, and the README also lists Let's Encrypt, SSL.com, Google Public CA and Actalis.
