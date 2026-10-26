---
id: crow
name: Crow
urls:
  home: https://crowcpp.org
  repository: https://github.com/CrowCpp/Crow
  docs: https://crowcpp.org/master/
category:
  - framework
description: C++ microframework for building HTTP and WebSocket web services, with routing, JSON, templates and middleware.
status: active
maintainer: CrowCpp
firstRelease: 2017
language: cpp
runtime:
  - binary
hosting:
  - binary
templating: mustache
runsAs:
  - always-on
installMethod: single header crow_all.h, or CMake, or a package manager
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2026-09-07
githubStargazers: 5016
contributors: 176
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://crowcpp.org/master/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/CrowCpp/Crow
    checkedAt: 2026-10-26
  - field: urls
    url: https://crowcpp.org/master/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/CrowCpp/Crow/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/CrowCpp/Crow
    checkedAt: 2026-10-26
  - field: category
    url: https://crowcpp.org/master/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://crowcpp.org/master/getting_started/setup/linux/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://crowcpp.org/master/getting_started/setup/linux/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://crowcpp.org/master/getting_started/setup/linux/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://crowcpp.org/master/getting_started/setup/macos/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://crowcpp.org/master/getting_started/setup/windows/
    checkedAt: 2026-10-26
  - field: templating
    url: https://crowcpp.org/master/guides/templating/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://crowcpp.org/master/guides/syste/
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/CrowCpp/Crow/master/LICENSE
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/CrowCpp/Crow/master/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/CrowCpp/Crow/tags
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/CrowCpp/Crow/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/CrowCpp/Crow/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/CrowCpp/Crow
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/CrowCpp/Crow/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Crow is a C++ microframework for HTTP and WebSocket web services. The project ships as one header file, `crow_all.h`, or as headers that CMake builds, and the setup pages require a recent C++ compiler and Asio development headers. Templates use Mustache.

The systemd guide describes giving a Crow application a systemd service unit, so the application runs as a long-lived process that the system starts.

## Worth knowing

The repository's LICENSE file says BSD 3-Clause, while the documentation page carries MIT permission text without naming a license, so the record uses the BSD 3-Clause statement only. GitHub lists a prerelease newer than the latest stable release.
