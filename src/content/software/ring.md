---
id: ring
name: Ring
urls:
  repository: https://github.com/ring-clojure/ring
  docs: https://github.com/ring-clojure/ring/wiki
category:
  - library
description: Clojure library that abstracts HTTP into one API so web applications, servers and frameworks can share handlers, requests and middleware.
status: active
maintainer: Mark McGranaghan, James Reeves & contributors
maintainerType: community
firstRelease: 2009
language: clojure
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 11
installMethod: deps.edn or Leiningen dependency
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-10-19
githubStargazers: 3891
contributors: 133
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://api.github.com/repos/ring-clojure/ring
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/ring-clojure/ring/blob/master/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/ring-clojure/ring/blob/master/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/ring-clojure/ring
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/ring-clojure/ring/blob/master/CHANGELOG.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/ring-clojure/ring/blob/master/CHANGELOG.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/ring-clojure/ring/blob/master/README.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/ring-clojure/ring
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/ring-clojure/ring/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/ring-clojure/ring/blob/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/ring-clojure/ring/git/refs/tags/1.15.6
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://github.com/ring-clojure/ring/blob/master/CHANGELOG.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://github.com/ring-clojure/ring/blob/master/CHANGELOG.md
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/ring-clojure/ring
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/ring-clojure/ring/contributors
    checkedAt: 2026-10-26
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
runsAs: null
---

Ring is a Clojure web applications library that its README says was inspired by Python's WSGI and Ruby's Rack. Applications are built from modular components that can be shared among applications, web servers and web frameworks. The repository holds several libraries: ring-core for handlers, requests, responses and middleware; ring-devel for debugging; adapters for Java Servlets in both the older and the Jakarta forms; and ring-jetty-adapter, which runs an application on an embedded Jetty server. The interface is described in a SPEC.md file in the repository.

## Worth knowing

The Jetty adapter needs a newer Java runtime than the core library, as the changelog records for the 1.14.0 release.
