---
id: pedestal
name: Pedestal
urls:
  home: https://pedestal.io/pedestal/0.8/
  repository: https://github.com/pedestal/pedestal
  docs: https://pedestal.io/pedestal/0.8/
category:
  - framework
description: Set of Clojure libraries for server-side services, APIs and web applications, with Jetty 12 and Http-Kit connectors.
status: active
maintainer: NuBank NA
firstRelease: 2013
language: clojure
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
runsAs:
  - always-on
renderingModes:
  - server
installMethod: deps.edn with the clj tool
licenseModel: open-source
license: EPL-1.0
currentMajor: "0"
latestReleaseDate: 2026-10-06
githubStargazers: 2782
contributors: 108
social:
  bluesky: https://bsky.app/profile/clj-pedestal.bsky.social
  forum: https://clojurians.slack.com/archives/C0K65B20P
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://pedestal.io/pedestal/0.8/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/pedestal/pedestal
    checkedAt: 2026-10-26
  - field: urls
    url: https://pedestal.io/pedestal/0.8/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/pedestal/pedestal/releases
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://pedestal.io/pedestal/0.8/terms.html
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/pedestal/pedestal
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/pedestal/pedestal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://github.com/pedestal/pedestal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://pedestal.io/pedestal/0.8/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://pedestal.io/pedestal/0.8/guides/hello-world.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://pedestal.io/pedestal/0.8/guides/war-deployment.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/pedestal/pedestal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/pedestal/pedestal/blob/master/README.md
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/pedestal/pedestal/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/pedestal/pedestal/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/pedestal/pedestal
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/pedestal/pedestal/contributors
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://pedestal.io/pedestal/0.8/
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Pedestal ships as Clojure libraries under the io.pedestal group, published on Clojars. A project declares the libraries it uses in a deps.edn file and runs them with the clj tool, on the Java Virtual Machine from Java 17 upward.

Pedestal's primary deployment mode is embedded: the application starts and launches a servlet container that receives its requests. The README names Jetty 12 and Http-Kit as the connectors it integrates by default, and the repository is a monorepo that holds the libraries together.
