---
id: cppcms
name: CppCMS
urls:
  repository: https://github.com/artyom-beilis/cppcms
category:
  - framework
description: C++ web development framework for building web applications and web services, served by its own HTTP, FastCGI or SCGI front end.
status: active
maintainer: Artyom Beilis
maintainerType: individual
firstRelease: 2010
language: cpp
runtime:
  - binary
hosting:
  - binary
templating: CppCMS template language
i18n: yes
runsAs:
  - always-on
installMethod: CMake build, then make install
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2025-11-02
githubStargazers: 528
contributors: 6
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/artyom-beilis/cppcms
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/artyom-beilis/cppcms/master/COPYING.TXT
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/artyom-beilis/cppcms
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/artyom-beilis/cppcms/master/COPYING.TXT
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://raw.githubusercontent.com/artyom-beilis/cppcms/master/MIT.TXT
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/artyom-beilis/cppcms/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/artyom-beilis/cppcms/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/artyom-beilis/cppcms
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/artyom-beilis/cppcms/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

CppCMS is a C++ web development framework for web sites and web services; its home page says it is not a CMS. Web pages are written in the framework's own template language. The framework is built from source with a C++ compiler and CMake, and the build finishes with `make install`.

An application's run function keeps the process serving until it receives a signal, so the application is a long-lived server process. The project is maintained by Artyom Beilis.

## Worth knowing

The home page says the project is MIT licensed from version 1.2 on, and the earlier licenses are not stated on its pages. The site is served over plain http, so the record links no homepage or documentation.
