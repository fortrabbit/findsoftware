---
id: dropwizard
name: Dropwizard
urls:
  home: https://www.dropwizard.io
  repository: https://github.com/dropwizard/dropwizard
  docs: https://www.dropwizard.io/en/stable/
category:
  - framework
description: Java framework for building RESTful web services, combining Jetty, Jersey, Jackson, Logback and related libraries into one application package.
status: active
maintainer: Dropwizard Team
maintainerType: community
firstRelease: 2011
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 17
templating: freemarker, mustache
runsAs:
  - always-on
renderingModes:
  - server
installMethod: maven project, built to a jar
licenseModel: open-source
license: Apache-2.0
currentMajor: "5"
latestReleaseDate: 2026-05-31
githubStargazers: 8582
contributors: 345
social:
  bluesky: https://bsky.app/profile/dropwizard.bsky.social
  mastodon: https://foojay.social/@dropwizard
  forum: https://groups.google.com/forum/#!forum/dropwizard-user
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.dropwizard.io/en/stable/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/dropwizard/dropwizard
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.dropwizard.io/en/stable/
    checkedAt: 2026-10-26
  - field: category
    url: https://www.dropwizard.io/en/stable/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/dropwizard/dropwizard
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.dropwizard.io/en/stable/getting-started.html
    checkedAt: 2026-10-26
  - field: runtimeMin
    url: https://www.dropwizard.io/en/stable/getting-started.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.dropwizard.io/en/stable/getting-started.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.dropwizard.io/en/stable/getting-started.html
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://www.dropwizard.io/en/stable/getting-started.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.dropwizard.io/en/stable/getting-started.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://www.dropwizard.io/en/stable/manual/views.html
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/dropwizard/dropwizard
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.dropwizard.io/en/stable/about/faq.html
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.dropwizard.io/en/stable/about/faq.html
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/dropwizard/dropwizard/git/ref/tags/v0.0.1
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/dropwizard/dropwizard/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/dropwizard/dropwizard/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/dropwizard/dropwizard
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/dropwizard/dropwizard/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Dropwizard is a Java framework for RESTful web services. It bundles Jetty for HTTP, Jersey for REST resources, Jackson for JSON and Logback for logging into one application package. A project is set up with Maven, built into a jar, and started with the server command, which runs the application as an HTTP server. HTML views use FreeMarker or Mustache. The Dropwizard Team maintains it.

## Worth knowing

The current line requires a newer Java than earlier ones, per the getting-started guide. Older lines still receive maintenance releases.
