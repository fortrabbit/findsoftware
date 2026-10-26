---
id: tadam
name: Tadam
urls:
  home: https://tadam-framework.andros.dev/
  repository: https://github.com/tadam-framework/tadam-core
  docs: https://tadam-framework.andros.dev/
category:
  - framework
description: Clojure web framework for building dynamic, function-oriented websites.
status: stub
maintainer: Andros Fenollosa
firstRelease: 2020
language: clojure
runtime:
  - jvm
hosting:
  - java
templating: selmer
runsAs:
  - always-on
renderingModes:
  - server
installMethod: Leiningen template (lein new tadam-lite)
licenseModel: open-source
license: EPL-2.0, EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0
currentMajor: "0"
latestReleaseDate: 2020-10-11
githubStargazers: 73
contributors: 1
social:
  x: https://twitter.com/TadamWeb
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/tadam-framework/tadam-core
    checkedAt: 2026-10-26
  - field: urls
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: category
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/tadam-framework/tadam-core
    checkedAt: 2026-10-26
  - field: runtime
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: templating
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/tadam-framework/tadam-core
    checkedAt: 2026-10-26
  - field: license
    url: https://clojars.org/api/artifacts/tadam-core
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/tadam-framework/tadam-core/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://tadam-framework.andros.dev/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://repo.clojars.org/tadam-core/tadam-core/0.3.0/tadam-core-0.3.0.pom
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/tadam-framework/tadam-core/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/tadam-framework/tadam-core/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/tadam-framework/tadam-core
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/tadam-framework/tadam-core/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Tadam is a web framework for Clojure. Its [site](https://tadam-framework.andros.dev/) describes it as a framework for function-oriented websites, with routes and views written in Clojure and HTML templates rendered through Selmer, and compares it to Flask. The core library is published on Clojars as tadam-core, and a project is created with the tadam-lite Leiningen template and runs on the JVM. The deployment section builds a standalone jar with `lein uberjar` and shows it running as a systemd service behind an Nginx reverse proxy.

## Worth knowing

Creating a project needs a Java installation and Leiningen, as the site's installation steps state.
