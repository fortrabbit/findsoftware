---
id: luminus
name: Luminus
urls:
  home: https://luminusweb.com
  repository: https://github.com/luminus-framework/luminus-template
  docs: https://luminusweb.com/docs/guestbook
category:
  - framework
description: Clojure web framework built from a set of lightweight libraries, with a Leiningen template that generates new web applications.
status: active
maintainer: Dmitri Sotnikov
firstRelease: 2013
language: clojure
runtime:
  - jvm
hosting:
  - java
databases:
  - postgres
  - mysql
  - sqlite
  - mongodb
templating: selmer
runsAs:
  - always-on
installMethod: lein new luminus, then lein run (Leiningen)
licenseModel: open-source
license: MIT
currentMajor: "4"
latestReleaseDate: 2026-02-27
githubStargazers: 649
contributors: 128
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://luminusweb.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/luminus-framework/luminus-template
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/luminus-framework/luminus-template/commits/v0.5.2
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://raw.githubusercontent.com/luminus-framework/luminus-template/master/LICENSE
    checkedAt: 2026-10-26
  - field: category
    url: https://luminusweb.com/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/luminus-framework/luminus-template
    checkedAt: 2026-10-26
  - field: runtime
    url: https://luminusweb.com/
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/luminus-framework/luminus-template/master/LICENSE
    checkedAt: 2026-10-26
  - field: license
    url: https://luminusweb.com/
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://luminusweb.com/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://luminusweb.com/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://luminusweb.com/docs/deployment
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/luminus-framework/luminus-template/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/luminus-framework/luminus-template/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/luminus-framework/luminus-template/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/luminus-framework/luminus-template/master/README.md
    checkedAt: 2026-10-26
  - field: databases
    url: https://raw.githubusercontent.com/luminus-framework/luminus-template/master/README.md
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/luminus-framework/luminus-template
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/luminus-framework/luminus-template/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://clojars.org/api/artifacts/luminus/lein-template
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://clojars.org/luminus/lein-template
    checkedAt: 2026-10-26
  - field: urls
    url: https://luminusweb.com/docs/guestbook
    checkedAt: 2026-10-26
  - field: templating
    url: https://luminusweb.com/docs/guestbook
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Luminus is a Clojure web framework built from a set of libraries. Applications are created with a Leiningen template, using `lein new luminus my-app`, and the template adds options for the web server, the database, ClojureScript and other features as profiles. Pages are rendered with Selmer templates. A generated app runs on the JVM with an embedded Jetty server by default, and `lein uberjar` builds a standalone JAR.

The [deployment guide](https://luminusweb.com/docs/deployment) covers running the JAR directly, deploying a WAR file to Apache Tomcat, deploying to WildFly, running on a VPS under systemd, and deploying to Heroku.

## Worth knowing

The homepage names [Kit](https://kit-clj.github.io/) as a successor to Luminus. The template's README marks its Immutant server option as no longer funded or maintained, and that option is one of the server choices the template offers.
