---
id: padrino
name: Padrino
urls:
  home: https://padrinorb.com/
  repository: https://github.com/padrino/padrino-framework
  docs: https://padrinorb.com/guides/
category:
  - framework
description: Ruby web framework built on Sinatra.
status: active
maintainer: Padrino Team
maintainerType: community
firstRelease: 2009
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.7
basedOn:
  - sinatra
databases:
  - sqlite
  - postgres
  - mysql
adminUi: true
templating: erb, haml, slim, liquid
i18n: yes, locale translations for models and interface text
runsAs:
  - always-on
installMethod: gem install padrino
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-10-15
githubStargazers: 3405
contributors: 209
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://padrinorb.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/padrino/padrino-framework
    checkedAt: 2026-10-26
  - field: urls
    url: https://padrinorb.com/guides/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/padrino.json
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://rubygems.org/api/v1/gems/padrino.json
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/padrino/padrino-framework
    checkedAt: 2026-10-26
  - field: runtime
    url: https://padrinorb.com/guides/getting-started/installation/
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://padrinorb.com/guides/getting-started/installation/
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://padrinorb.com/
    checkedAt: 2026-10-26
  - field: category
    url: https://padrinorb.com/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://padrinorb.com/guides/getting-started/installation/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://padrinorb.com/guides/advanced-usage/deployment/
    checkedAt: 2026-10-26
  - field: databases
    url: https://padrinorb.com/guides/getting-started/basic-projects/
    checkedAt: 2026-10-26
  - field: templating
    url: https://padrinorb.com/guides/generators/projects/
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://padrinorb.com/
    checkedAt: 2026-10-26
  - field: i18n
    url: https://padrinorb.com/guides/features/localization/
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/padrino/padrino-framework/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/padrino/padrino-framework/blob/master/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/padrino/padrino-framework/tags
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/padrino.json
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/padrino/padrino-framework
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/padrino/padrino-framework/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Padrino is a Ruby web framework built upon the Sinatra library and installed as the padrino gem. Its generator creates projects that can use the sqlite, postgres or mysql database adapters, with erb, haml, slim or liquid as the template language.

The framework includes an admin interface with user authentication and authorization management, and ships translations for it. A project runs as a process the developer starts with padrino start or with the server's own command, so it stays running between requests.
