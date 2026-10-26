---
id: spina
name: Spina CMS
urls:
  repository: https://github.com/SpinaCMS/Spina
  docs: https://github.com/SpinaCMS/Spina/tree/main/docs/v2
category:
  - cms
description: Content management system built into Ruby on Rails applications, with its own admin interface at /admin.
status: stub
maintainer: denkGroot
firstRelease: 2015
language: ruby
runtime:
  - ruby
hosting:
  - ruby
runtimeMin: ruby 2.7
basedOn:
  - rails
contentStore:
  - database
databases:
  - postgres
  - mysql
  - sqlite
adminUi: true
templating: erb
i18n: yes
installMethod: Gemfile entry, bundle install, then rails spina:install
licenseModel: open-source
license: MIT, SIL Open Font License 1.1 (the bundled Metropolis font in the admin panel)
currentMajor: "2"
latestReleaseDate: 2026-05-22
githubStargazers: 2256
contributors: 105
social:
  discord: https://discord.gg/bv5Mu4XYcN
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/SpinaCMS/Spina
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/SpinaCMS/Spina/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/SpinaCMS/Spina/blob/main/LICENSE.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/SpinaCMS/Spina
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/SpinaCMS/Spina/blob/main/docs/v2/getting_started/1_installing_ruby.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://rubygems.org/api/v2/rubygems/spina/versions/2.21.0.json
    checkedAt: 2026-10-26
  - field: basedOn
    url: https://github.com/SpinaCMS/Spina/blob/main/docs/v2/1_getting_started.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/SpinaCMS/Spina/blob/main/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/SpinaCMS/Spina/blob/main/docs/v2/getting_started/2_installing_spina.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/SpinaCMS/Spina/blob/main/docs/v2/getting_started/3_existing_project.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/SpinaCMS/Spina/blob/main/docs/v2/advanced/1_create_custom_parts.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/SpinaCMS/Spina/blob/main/docs/v2/getting_started/2_installing_spina.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/SpinaCMS/Spina/blob/main/docs/v2/getting_started/4_upgrading.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/SpinaCMS/Spina/blob/main/docs/v2/themes/1_parts.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/SpinaCMS/Spina/blob/main/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/SpinaCMS/Spina/blob/main/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/SpinaCMS/Spina/blob/main/LICENSE.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/spina.json
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/SpinaCMS/Spina/releases/tag/v2.21.0
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/SpinaCMS/Spina/releases/tag/v2.21.0
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/SpinaCMS/Spina
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/SpinaCMS/Spina/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Spina CMS is a content management system that runs inside a Ruby on Rails application. It is added to a Rails project through a Gemfile entry and set up with the `rails spina:install` task, after which the admin interface is served at `/admin`. All page content is stored in a single JSON column in the application's database, and parts support translations out of the box. Rendered output uses ERB views.

## Worth knowing

The website named in the repository does not resolve, so the guide read here is the `docs` folder in the [repository](https://github.com/SpinaCMS/Spina/tree/main/docs/v2).
