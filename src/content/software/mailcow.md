---
id: mailcow
name: mailcow
urls:
  home: https://mailcow.email
  repository: https://github.com/mailcow/mailcow-dockerized
  docs: https://docs.mailcow.email/
category:
  - email
description: Open source groupware and e-mail suite based on Docker.
status: stub
maintainer: The Infrastructure Company GmbH
maintainerType: company
firstRelease: 2022
hqCountry: DE
databases:
  - mariadb
adminUi: true
installMethod: git clone, docker compose
licenseModel: open-source
license: GPL-3.0
latestReleaseDate: 2026-10-21
githubStargazers: 13736
contributors: 326
social:
  x: https://twitter.com/mailcow_email
  mastodon: https://mailcow.social/@doncow
  forum: https://community.mailcow.email
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://mailcow.email/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.mailcow.email/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/mailcow/mailcow-dockerized
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://mailcow.email/imprint/
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://mailcow.email/imprint/
    checkedAt: 2026-11-03
  - field: hqCountry
    url: https://mailcow.email/imprint/
    checkedAt: 2026-11-03
  - field: category
    url: https://docs.mailcow.email/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://docs.mailcow.email/getstarted/install/
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/mailcow/mailcow-dockerized
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://api.github.com/repos/mailcow/mailcow-dockerized
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/mailcow/mailcow-dockerized/releases/latest
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/mailcow/mailcow-dockerized
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/mailcow/mailcow-dockerized/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/mailcow/mailcow-dockerized/releases/tag/2022-01
    checkedAt: 2026-11-03
  - field: databases
    url: https://docs.mailcow.email/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://docs.mailcow.email/
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

mailcow is an open source groupware and e-mail suite based on Docker. The [install guide](https://docs.mailcow.email/getstarted/install/) starts with a git clone of the repository, and the stack is then started with Docker Compose. Each container in the stack runs one application, such as a mail transfer agent, an IMAP server or a spam filter, with MariaDB storing user information.

Administration happens in the mailcow web interface, where domain administrators and mailbox users get separate permissions. Logins can come from an LDAP server or an OIDC identity provider.

## Worth knowing

The project's pages show mail relayed from servers in the same network, not from websites or applications, so it is unclear whether it fits the scope of this index.
