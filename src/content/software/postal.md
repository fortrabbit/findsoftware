---
id: postal
name: Postal
urls:
  repository: https://github.com/postalserver/postal
  docs: https://docs.postalserver.io/
category:
  - email
description: Mail delivery platform that sends and receives e-mail for websites and web applications, run on the operator's own servers.
status: active
maintainer: Krystal Hosting Ltd
maintainerType: company
firstRelease: 2021
hqCountry: GB
language: ruby
databases:
  - mariadb
adminUi: true
runsAs:
  - always-on
installMethod: docker-compose
licenseModel: open-source
license: MIT
currentMajor: "3"
latestReleaseDate: 2026-06-03
githubStargazers: 16919
contributors: 46
social:
  x: https://x.com/postalserverio
  discord: https://discord.postalserver.io
  forum: https://github.com/postalserver/postal/discussions
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://github.com/postalserver/postal
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.postalserver.io/
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.postalserver.io/
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/postalserver/postal/blob/main/MIT-LICENCE
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://krystal.io/legal
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/postalserver/postal/releases
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/postalserver/postal
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/postalserver/postal
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/postalserver/postal/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/postalserver/postal/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/postalserver/postal
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/postalserver/postal
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postalserver.io/getting-started/prerequisites/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.postalserver.io/getting-started/postal-command/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://docs.postalserver.io/other/containers/
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.postalserver.io/getting-started/prerequisites/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.postalserver.io/
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

Postal is a mail delivery platform for websites and web applications, run on the operator's own server. Its installation helper, a small Bash script, generates the configuration and starts the software as Docker containers, and its web interface manages mail servers and shows mail logs. Applications send mail through its HTTP API, which takes JSON POST requests authenticated with a key issued for each mail server. Postal can also post incoming mail and delivery events to an HTTP endpoint that the application provides. Messages and other configuration are kept in a MariaDB database that Postal provisions for each mail server, and sign-in can be delegated to an OpenID Connect provider.

## Worth knowing

Three processes must keep running for an installation to work, so Postal needs a server that stays up. MariaDB is required, and MySQL is not supported in its place.
