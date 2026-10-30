---
id: slickstack
name: SlickStack
urls:
  home: https://slickstack.io
  repository: https://github.com/littlebizzy/slickstack
  docs: https://slickstack.io/docs
category:
  - web-server
description: Bash script that installs and configures a LEMP stack for running one WordPress site on an Ubuntu server.
status: active
maintainer: LittleBizzy
maintainerType: company
databases:
  - mysql
adminUi: false
runsAs:
  - scheduled
installMethod: shell-script-wget
licenseModel: open-source
license: GPL-3.0
githubStargazers: 704
contributors: 7
httpArchiveSites: 21
social:
  discord: https://discord.gg/MC7kzgJdgH
  forum: https://slickstack.io/forum
  youtube: https://www.youtube.com/@slickstack
  facebook: https://www.facebook.com/slickstack
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://slickstack.io/about
    checkedAt: 2026-10-30
  - field: urls
    url: https://slickstack.io
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/littlebizzy/slickstack
    checkedAt: 2026-10-30
  - field: urls
    url: https://slickstack.io/docs
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://slickstack.io/disclosure
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://slickstack.io/disclosure
    checkedAt: 2026-10-30
  - field: category
    url: https://slickstack.io
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/littlebizzy/slickstack
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://slickstack.io
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/littlebizzy/slickstack
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/littlebizzy/slickstack/contributors
    checkedAt: 2026-10-30
  - field: httpArchiveSites
    url: https://cdn.httparchive.org/v1/technologies
    checkedAt: 2026-10-30
  - field: databases
    url: https://github.com/littlebizzy/slickstack/blob/master/readme.md
    checkedAt: 2026-10-30
  - field: adminUi
    url: https://github.com/littlebizzy/slickstack/blob/master/readme.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/littlebizzy/slickstack/blob/master/readme.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://slickstack.io/install
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://slickstack.io/install
    checkedAt: 2026-10-30
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

SlickStack is a Bash script that sets up a LEMP stack for one WordPress site on an Ubuntu server. The [installation guide](https://slickstack.io/install) runs it with a single wget and bash command. After that, the server runs scheduled cron jobs that connect to the project's GitHub repository, so most upkeep happens through those jobs rather than by hand. MySQL runs on the same server by default and connects over TCP. WordPress Multisite can be switched on in its configuration.

## Worth knowing

The README says the design is one primary domain per server, with no built-in web interface. LittleBizzy, a private business, maintains the project and also sells setup services for it.
