---
id: uacme
name: uacme
urls:
  home: https://ndilieto.github.io/uacme/uacme.html
  repository: https://github.com/ndilieto/uacme
  docs: https://ndilieto.github.io/uacme/uacme.html
category:
  - web-server
description: Command-line ACMEv2 client written in plain C that requests and renews TLS certificates from an ACME certificate authority.
status: active
maintainer: Nicola Di Lieto
maintainerType: individual
firstRelease: 2019
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - scheduled
installMethod: build from source
licenseModel: open-source
license: GPL-3.0
currentMajor: "1"
latestReleaseDate: 2026-04-05
githubStargazers: 517
contributors: 11
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://ndilieto.github.io/uacme/uacme.html
    checkedAt: 2026-10-30
  - field: urls
    url: https://ndilieto.github.io/uacme/uacme.html
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/ndilieto/uacme
    checkedAt: 2026-10-30
  - field: urls
    url: https://ndilieto.github.io/uacme/uacme.html
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/ndilieto/uacme/upstream/1.8.1/NEWS
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/ndilieto/uacme/upstream/1.8.1/NEWS
    checkedAt: 2026-10-30
  - field: category
    url: https://ndilieto.github.io/uacme/uacme.html
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/ndilieto/uacme
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/ndilieto/uacme/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/ndilieto/uacme/blob/master/README.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/ndilieto/uacme/blob/master/README.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/ndilieto/uacme/blob/master/README.md
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/ndilieto/uacme
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/ndilieto/uacme/upstream/1.8.1/COPYING
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://raw.githubusercontent.com/ndilieto/uacme/upstream/1.8.1/ChangeLog
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/ndilieto/uacme/commits/b024743546c3f85d51228e6447095c83fa2800dc
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://raw.githubusercontent.com/ndilieto/uacme/upstream/1.8.1/ChangeLog
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/ndilieto/uacme
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/ndilieto/uacme/contributors?per_page=1
    checkedAt: 2026-10-30
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

uacme is a command-line client for the ACMEv2 protocol described in RFC 8555. It asks an ACME certificate authority for a certificate and renews it when needed, and its README describes running it as a cron job that renews the certificate when needed. It installs from source with the configure and make steps, or from the distribution packages the project lists.

## Worth knowing

The README says not to expect uacme to set up the web server to use the certificates it obtains, so configuring the web server is left to the user.
