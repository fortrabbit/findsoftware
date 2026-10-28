---
id: dehydrated
name: dehydrated
urls:
  home: https://dehydrated.io
  repository: https://github.com/dehydrated-io/dehydrated
  docs: https://github.com/dehydrated-io/dehydrated/tree/master/docs
category:
  - web-server
description: Command-line ACME client, written as a bash script, that obtains and renews TLS certificates from ACME certificate authorities such as Let's Encrypt and ZeroSSL.
status: active
maintainer: ZeroSSL GmbH
maintainerType: company
firstRelease: 2016
hqCountry: AT
runsAs:
  - scheduled
installMethod: tarball download
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-05-17
githubStargazers: 6263
contributors: 89
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://dehydrated.io/
    checkedAt: 2026-10-28
  - field: urls
    url: https://api.github.com/repos/dehydrated-io/dehydrated
    checkedAt: 2026-10-28
  - field: urls
    url: https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/README.md
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://zerossl.com/imprint/
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/README.md
    checkedAt: 2026-10-28
  - field: hqCountry
    url: https://zerossl.com/imprint/
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://api.github.com/repos/dehydrated-io/dehydrated/releases
    checkedAt: 2026-10-28
  - field: category
    url: https://dehydrated.io/
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://dehydrated.io/
    checkedAt: 2026-10-28
  - field: license
    url: https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/LICENSE
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/LICENSE
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://raw.githubusercontent.com/dehydrated-io/dehydrated/master/docs/man/dehydrated.1
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://api.github.com/repos/dehydrated-io/dehydrated/releases/latest
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://api.github.com/repos/dehydrated-io/dehydrated/releases/latest
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/dehydrated-io/dehydrated
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/dehydrated-io/dehydrated/contributors?per_page=1
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

dehydrated is a command-line ACME client that requests and renews TLS certificates from Let's Encrypt, ZeroSSL and other ACME certificate authorities. The [homepage](https://dehydrated.io/) describes it as a client for signing certificates with an ACME server, and the [README](https://github.com/dehydrated-io/dehydrated) describes a bash script that uses the openssl utility for keys and certificates and cURL for requests to the server. The repository's man page says certificates are requested and renewed on a regular basis, through a cron job or a timer, and it stores the certificates on the host it runs on.

## Worth knowing

The project's pages name two different maintainers: the README says the repository is officially maintained by ZeroSSL, and the homepage says it is maintained by an individual developer.
