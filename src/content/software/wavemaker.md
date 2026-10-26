---
id: wavemaker
name: WaveMaker
urls:
  home: https://www.wavemaker.com
  docs: https://wavemaker.com/learn/
category:
  - admin-panel
description: Low-code platform for building web and hybrid mobile applications, offered as a cloud service and as an on-premise installation.
status: active
maintainer: WaveMaker, Inc.
maintainerType: company
firstRelease: 2018
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
databases:
  - mysql
  - postgres
  - oracle
  - sqlserver
adminUi: true
i18n: yes
runsAs:
  - always-on
renderingModes:
  - spa
installMethod: WME installer on a virtual machine or cloud instance
license: WaveMaker license key file, shared by the WaveMaker team
currentMajor: "11"
latestReleaseDate: 2026-05-18
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/orgs/wavemaker
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/wavemaker/docs/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/wavemaker/docs/blob/master/website/docusaurus.config.js
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/wavemaker/docs/blob/master/learn/wavemaker-release-notes.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/wavemaker/docs/blob/master/learn/app-development/wavemaker-overview/pre-requisites.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/wavemaker/wavemaker-commons
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/wavemaker/docs/blob/master/learn/app-development/deployment/deployment-web-server.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/wavemaker/docs/blob/master/learn/app-development/deployment/deployment-web-server.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/wavemaker/docs/blob/master/learn/on-premise/getting-started.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/wavemaker/docs/blob/master/learn/app-development/deployment/deployment-web-server.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/wavemaker/docs/blob/master/learn/app-development/wavemaker-overview/platform-overview.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/wavemaker/docs/blob/master/learn/app-development/wavemaker-overview/supported-technologies.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/wavemaker/docs/blob/master/learn/on-premise/configure/config-users-auth-providers.md
    checkedAt: 2026-10-26
  - field: i18n
    url: https://github.com/wavemaker/docs/blob/master/learn/app-development/wavemaker-overview/localization.md
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/wavemaker/docs/blob/master/learn/on-premise/aws/install/apply-license.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://github.com/wavemaker/docs/blob/master/learn/wavemaker-release-notes.md
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/wavemaker/docs/blob/master/learn/wavemaker-release-notes.md
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

WaveMaker is a low-code platform for building web and hybrid mobile applications. Pages are assembled visually from widgets in the Studio, and the web front end is a single-page application that calls REST services on the back end. It is offered as WaveMaker Online, a cloud service with nothing to install, and as WaveMaker Enterprise, an on-premise product installed on virtual machines or cloud instances.

Apps are deployed as WAR files to a Java web server. On the Enterprise installation, each platform service runs in a separate Docker container.

## Worth knowing

The Enterprise edition is the only one that can be hosted on a company's own infrastructure, and its installation guide asks for machines dedicated to the platform, with no other process running on them. The number of users it can add is set by the terms of a license key that WaveMaker issues. Platform-level localization, Git Enterprise integration and single sign-on for platform logins are described as Enterprise features.
