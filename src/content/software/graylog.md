---
id: graylog
name: Graylog
urls:
  repository: https://github.com/Graylog2/graylog2-server
  docs: https://go2docs.graylog.org/current/home.htm
category:
  - analytics
description: Free and open log management platform that collects log data from applications and devices for search and analysis.
status: active
maintainer: Graylog, Inc.
maintainerType: company
firstRelease: 2010
language: java
runtime:
  - jvm
hosting:
  - java
databases:
  - mongodb
adminUi: true
headlessApi:
  - rest
runsAs:
  - always-on
installMethod: os-package
licenseModel: source-available
license: SSPL-1.0
currentMajor: "7"
latestReleaseDate: 2026-10-19
githubStargazers: 8172
contributors: 153
social:
  x: https://twitter.com/graylog2
  forum: https://community.graylog.org/
  subreddit: https://www.reddit.com/r/graylog/
  facebook: https://www.facebook.com/graylog/
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/Graylog2/graylog2-server
    checkedAt: 2026-11-03
  - field: urls
    url: https://go2docs.graylog.org/current/home.htm
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://go2docs.graylog.org/current/home.htm
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/Graylog2/graylog2-server/blob/master/README.markdown
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/Graylog2/graylog2-server
    checkedAt: 2026-11-03
  - field: runtime
    url: https://go2docs.graylog.org/current/downloading_and_installing_graylog/operating_system_packages.htm
    checkedAt: 2026-11-03
  - field: databases
    url: https://go2docs.graylog.org/current/downloading_and_installing_graylog/operating_system_packages.htm
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://go2docs.graylog.org/current/setting_up_graylog/web_interface.htm
    checkedAt: 2026-11-03
  - field: headlessApi
    url: https://go2docs.graylog.org/current/setting_up_graylog/rest_api_use_cases.htm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://go2docs.graylog.org/current/downloading_and_installing_graylog/operating_system_packages.htm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://go2docs.graylog.org/current/downloading_and_installing_graylog/docker_installation.htm
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://go2docs.graylog.org/current/downloading_and_installing_graylog/operating_system_packages.htm
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://go2docs.graylog.org/current/setting_up_graylog/web_interface.htm
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/Graylog2/graylog2-server/blob/master/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/Graylog2/graylog2-server/git/refs/tags/7.2.1
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/Graylog2/graylog2-server/commits/7.2.1
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/Graylog2/graylog2-server/commits/0.9
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/Graylog2/graylog2-server
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/Graylog2/graylog2-server/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Graylog is a log management platform with a web interface that users work in. Applications and devices send log data to it through listener inputs, including GELF, raw HTTP and syslog, and people search that data in the web interface or through the REST API.

The project recommends Graylog Data Node as the search backend and documents self-managed OpenSearch as an alternative. The operating system packages install the server and the data node, and the project also publishes a Docker Compose setup.

## Worth knowing

The server is released under the Server Side Public License, version 1. Some features need a Graylog Enterprise license from the vendor, among them team management and sign-in through Okta or OIDC.
