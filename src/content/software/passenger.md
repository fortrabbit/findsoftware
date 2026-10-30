---
id: passenger
name: Phusion Passenger
urls:
  home: https://www.phusionpassenger.com/
  repository: https://github.com/phusion/passenger
  docs: https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/
  pricing: https://www.phusionpassenger.com/pricing
category:
  - web-server
description: Web server and application server that runs Ruby, Python, Node.js and other web apps behind Nginx or Apache, or standalone.
status: active
maintainer: Asynchronous B.V.
maintainerType: company
firstRelease: 2008
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: rubygem (Bundler)
licenseModel: open-core
license: MIT
currentMajor: "6"
latestReleaseDate: 2026-10-19
githubStargazers: 5091
contributors: 116
social:
  x: https://twitter.com/phusion_nl
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://github.com/phusion/passenger/blob/stable-6.2/README.md
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.phusionpassenger.com/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/phusion/passenger
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://github.com/phusion/passenger/blob/stable-6.2/LICENSE
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://github.com/phusion/passenger/blob/stable-6.2/LICENSE
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://api.github.com/repos/phusion/passenger/commits/d9821f84e46fb08b712c4b6013f5da72110ecead
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/phusion/passenger/blob/stable-6.2/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/phusion/passenger
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.phusionpassenger.com/docs/tutorials/installation/ruby/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.phusionpassenger.com/enterprise
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.phusionpassenger.com/enterprise
    checkedAt: 2026-10-30
  - field: license
    url: https://api.github.com/repos/phusion/passenger
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/phusion/passenger/blob/stable-6.2/LICENSE
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.phusionpassenger.com/pricing
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/phusion/passenger/releases/tag/release-6.2.1
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/phusion/passenger/releases/tag/release-6.2.1
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/phusion/passenger
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/phusion/passenger/contributors?per_page=1
    checkedAt: 2026-10-30
  - field: runtime
    url: https://www.phusionpassenger.com/enterprise
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

Phusion Passenger is a web server and application server that runs Ruby, Python, Node.js and Meteor apps, and supports other languages through generic language support described on the [what is Passenger](https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/) page. It plugs into Nginx or Apache, or runs standalone, and it handles HTTP requests, manages the app processes and serves several applications at the same time. The server core is written in C++, as the [Enterprise page](https://www.phusionpassenger.com/enterprise) states. A Ruby app adds the gem through its Gemfile, and installs also come as APT and YUM packages or through an automated installer. Asynchronous B.V. publishes the project under the MIT license.

## Worth knowing

Passenger runs as a server process that keeps running. The Enterprise page presents rolling restarts, error resistance, mass deployment and a live debugger as premium features.
