---
id: kit-clj
name: Kit
urls:
  home: https://kit-clj.github.io/
  repository: https://github.com/kit-clj/kit
  docs: https://kit-clj.github.io/
category:
  - framework
description: Clojure web framework made of modular libraries, started from a project template.
status: active
maintainer: Kit framework team
maintainerType: community
firstRelease: 2022
language: clojure
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
  - mysql
  - sqlite
templating: selmer
runsAs:
  - always-on
installMethod: neil new io.github.kit-clj/kit
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-02-18
githubStargazers: 558
contributors: 38
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://kit-clj.github.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/kit-clj/kit
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/kit-clj/kit/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/kit-clj/kit/master/LICENSE
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/kit-clj/kit
    checkedAt: 2026-10-26
  - field: runtime
    url: https://kit-clj.github.io/docs/guestbook.html
    checkedAt: 2026-10-26
  - field: category
    url: https://kit-clj.github.io/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/kit-clj/kit/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://kit-clj.github.io/docs/deployment.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://kit-clj.github.io/docs/guestbook.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/kit-clj/kit/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/kit-clj/kit/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://kit-clj.github.io/docs/guestbook.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://clojars.org/io.github.kit-clj/kit-core/versions/1.0.0
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/kit-clj/kit
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/kit-clj/kit/master/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://clojars.org/api/artifacts/io.github.kit-clj/kit-core
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://clojars.org/io.github.kit-clj/kit-core
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/kit-clj/kit
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/kit-clj/kit/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Kit is a Clojure web framework that its README describes as a template with a set of libraries. A new application is created from the kit-clj template with the neil tool, and the libraries are published on Clojars, where the core library is kit-core. Kit is built on Integrant, and the libraries cover database access for PostgreSQL, MySQL and SQLite, and Selmer templating. The Luminus site names Kit as its successor.

Applications run on the JVM. The documentation says Kit requires JDK 11 or greater, builds a standalone jar with the Clojure CLI, and shows that jar started with java -jar. The deployment guide runs the jar as a service that starts when the system boots.
