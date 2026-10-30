---
id: step-ca
name: step-ca
urls:
  home: https://smallstep.com/docs/step-ca/
  repository: https://github.com/smallstep/certificates
  docs: https://smallstep.com/docs/step-ca/
category:
  - web-server
description: Online certificate authority for X.509 and SSH certificates, with an ACME server that issues TLS certificates for web servers and other hosts.
status: active
maintainer: Smallstep Labs, Inc.
maintainerType: company
firstRelease: 2018
hqCountry: US
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: homebrew
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-03-23
githubStargazers: 9025
contributors: 97
social:
  x: https://twitter.com/smallsteplabs
  discord: https://u.step.sm/discord
  forum: https://github.com/smallstep/certificates/discussions
  youtube: https://www.youtube.com/@smallsteplabs
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://smallstep.com/docs/step-ca/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/smallstep/certificates
    checkedAt: 2026-10-30
  - field: urls
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://smallstep.com/terms-of-use/
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://smallstep.com/terms-of-use/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/smallstep/certificates/master/README.md
    checkedAt: 2026-10-30
  - field: category
    url: https://raw.githubusercontent.com/smallstep/certificates/master/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/smallstep/certificates
    checkedAt: 2026-10-30
  - field: runtime
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://smallstep.com/docs/step-ca/installation/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://smallstep.com/docs/step-ca/certificate-authority-server-production/
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/smallstep/certificates/master/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/smallstep/certificates/master/LICENSE
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/smallstep/certificates/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://api.github.com/repos/smallstep/certificates/releases/latest
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/smallstep/certificates/releases
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/smallstep/certificates
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/smallstep/certificates/contributors?per_page=1
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

step-ca is a certificate authority that signs X.509 and SSH certificates and works as an ACME server, so ACME clients can request TLS certificates for web servers from it. Its ACME basics page notes that any web server can answer the http-01 challenge by serving the response as a static file. The README describes it as the server counterpart to the step command-line client, and OIDC single sign-on tokens are one way to authorize a certificate request.

Packages are published for several operating systems, along with a Homebrew formula, Winget and Scoop packages, binaries and a Docker image. The production documentation describes running the server under systemd.

## Worth knowing

The README points to a commercial certificate authority from the same company for needs such as multiple certificate authorities and active revocation.
