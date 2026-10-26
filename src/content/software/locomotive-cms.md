---
id: locomotive-cms
name: Locomotive CMS
urls:
  home: https://www.locomotivecms.com
  repository: https://github.com/locomotivecms/engine
  docs: https://doc.locomotivecms.com
  pricing: https://www.locomotivecms.com/pricing
category:
  - cms
description: Open source content management platform for creating, publishing and editing websites, built as a Ruby on Rails application with the Wagon tool for local site development.
status: active
maintainer: NoCoffee SARL
maintainerType: company
firstRelease: 2013
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 3
contentStore:
  - database
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
templating: liquid
i18n: yes
runsAs:
  - always-on
  - local
installMethod: add the locomotivecms gem to a Rails application, then rails generate locomotive:install
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2022-10-13
githubStargazers: 2321
contributors: 109
social:
  x: https://twitter.com/locomotivecms
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.locomotivecms.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/locomotivecms/engine
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/locomotivecms/engine/blob/master/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/locomotivecms/engine/commits/v2.0.0
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.locomotivecms.com/terms-of-use
    checkedAt: 2026-10-26
  - field: category
    url: https://www.locomotivecms.com/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/locomotivecms/engine
    checkedAt: 2026-10-26
  - field: runtime
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/MIT-LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://www.locomotivecms.com/
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.locomotivecms.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.locomotivecms.com/pricing
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://doc.locomotivecms.com/get-started/getting-started-with-locomotive
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://doc.locomotivecms.com/get-started/getting-started-with-locomotive
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: headlessApi
    url: https://raw.githubusercontent.com/locomotivecms/engine/master/README.md
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/locomotivecms/engine
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/locomotivecms/engine/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://rubygems.org/api/v1/versions/locomotivecms.json
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/versions/locomotivecms.json
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Locomotive CMS is a content management platform for creating, publishing and editing websites. The engine is a Ruby on Rails application that generates a back-office for end users from the custom content types and editable regions a developer defines. Developers code the sites locally with Wagon, a separate open source tool, and deploy them to the engine through its internal API. Sites use Liquid templates, and the engine supports several sites, localization of all content and pages, and a REST API for managing sites.

## Worth knowing

The engine runs as a Rails server, so a live site depends on that process rather than on static files. The same company, NoCoffee SARL, runs a [hosting service](https://www.locomotivecms.com/pricing) for sites on the platform, priced separately from the open source engine. The getting-started guide names older Ruby, Rails and MongoDB requirements than the README lists, so check the requirements of the release you install.
