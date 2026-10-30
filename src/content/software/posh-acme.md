---
id: posh-acme
name: Posh-ACME
urls:
  home: https://poshac.me
  repository: https://github.com/rmbolger/Posh-ACME
  docs: https://poshac.me/docs/latest/
category:
  - web-server
description: PowerShell module and ACME client that creates publicly trusted SSL/TLS certificates from an ACME certificate authority such as Let's Encrypt.
status: active
maintainer: Ryan Bolger
maintainerType: individual
firstRelease: 2018
runsAs:
  - scheduled
installMethod: PowerShell Gallery (Install-Module)
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-10-12
githubStargazers: 935
contributors: 88
social:
  mastodon: https://mastodon.social/@rmbolger
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://poshac.me/docs/latest/
    checkedAt: 2026-10-30
  - field: urls
    url: https://poshac.me/docs/latest/
    checkedAt: 2026-10-30
  - field: urls
    url: https://poshac.me/docs/latest/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/rmbolger/Posh-ACME
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://raw.githubusercontent.com/rmbolger/Posh-ACME/main/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://raw.githubusercontent.com/rmbolger/Posh-ACME/main/LICENSE
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://github.com/rmbolger/Posh-ACME/blob/main/CHANGELOG.md
    checkedAt: 2026-10-30
  - field: category
    url: https://poshac.me/docs/latest/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://poshac.me/docs/latest/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://poshac.me/docs/latest/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://poshac.me/docs/latest/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://poshac.me/docs/latest/Tutorial/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/rmbolger/Posh-ACME/releases/tag/v4.35.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/rmbolger/Posh-ACME/releases/tag/v4.35.0
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/rmbolger/Posh-ACME/main/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://raw.githubusercontent.com/rmbolger/Posh-ACME/main/LICENSE
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/rmbolger/Posh-ACME
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/rmbolger/Posh-ACME/contributors?per_page=1
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Posh-ACME is a PowerShell module and ACME client that creates SSL/TLS certificates from an ACME certificate authority such as Let's Encrypt. It validates domains through DNS and HTTP challenge plugins, and it can import the finished certificate into the Windows certificate store. It is installed from the PowerShell Gallery with Install-Module, and it runs on Windows PowerShell with a .NET Framework release and on PowerShell Core across all supported platforms. Renewals are run by a job on the host, such as Windows Task Scheduler or cron. The module is by Ryan Bolger and is published on GitHub.

## Worth knowing

The module only obtains certificates and does not deploy them to a web server or service. The certificate import into the Windows store works only on Windows. The [documentation](https://poshac.me/docs/latest/) describes a local HTTP challenge listener for validation, and its guide on alternate trust chains notes that a website on Windows, such as one served by IIS, can keep serving the default chain.
