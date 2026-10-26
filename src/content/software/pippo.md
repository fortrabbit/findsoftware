---
id: pippo
name: Pippo
urls:
  home: https://pippo-java.github.io
  repository: https://github.com/pippo-java/pippo
  docs: https://pippo-java.github.io/doc/getting-started.html
category:
  - framework
description: Micro web framework for Java that runs as an executable application with an embedded web server.
status: active
firstRelease: 2014
language: java
runtime:
  - jvm
hosting:
  - java
templating: freemarker, jade, groovy, pebble, trimou, velocity
i18n: yes, messages per language from properties files
runsAs:
  - always-on
installMethod: Maven dependency ro.pippo:pippo-core
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2023-02-05
githubStargazers: 787
contributors: 29
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://pippo-java.github.io/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/pippo-java/pippo
    checkedAt: 2026-10-26
  - field: urls
    url: https://pippo-java.github.io/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/pippo-java/pippo
    checkedAt: 2026-10-26
  - field: runtime
    url: https://pippo-java.github.io/
    checkedAt: 2026-10-26
  - field: category
    url: https://pippo-java.github.io/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/pippo-java/pippo/git/refs/tags/pippo-parent-0.1.0
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/pippo-java/pippo/license
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://pippo-java.github.io/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/pippo-java/pippo/git/refs/tags/release-1.14.0
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/pippo-java/pippo/commits/e10eed0176b05aa784b4c05d0732174e34bc73b2
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://pippo-java.github.io/doc/deployment.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/pippo-java/pippo/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://pippo-java.github.io/dev/quickstart.html
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/pippo-java/pippo
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/pippo-java/pippo/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: templating
    url: https://pippo-java.github.io/doc/templates.html
    checkedAt: 2026-10-26
  - field: i18n
    url: https://pippo-java.github.io/doc/internationalization.html
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Pippo is a micro web framework for Java. The docs recommend deploying an application as a normal executable application with an embedded web server, and the framework is added as the Maven dependency pippo-core in the ro.pippo group. Freemarker is the default template engine, with Jade, Groovy, Pebble, Trimou and Velocity as built-in alternatives, and messages can be translated through per-language properties files.

## Worth knowing

The server page states that Pippo needs a servlet container to run. The embedded container is Jetty by default, and another container, such as Tomcat, can be used instead.
