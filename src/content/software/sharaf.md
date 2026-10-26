---
id: sharaf
name: sharaf
urls:
  home: https://sake92.github.io/sharaf/
  repository: https://github.com/sake92/sharaf
  docs: https://sake92.github.io/sharaf/
category:
  - framework
description: Scala 3 web framework for HTTP servers with routing, typed request parsing, HTML templates and OpenAPI-generated routes.
status: active
maintainer: Sakib Hadžiavdić
maintainerType: individual
firstRelease: 2024
language: scala
runtime:
  - jvm
hosting:
  - java
templating: twirl
runsAs:
  - always-on
installMethod: library dependency for Scala CLI, sbt or Mill
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-28
githubStargazers: 68
contributors: 3
social:
  discord: https://discord.gg/g9KVY3WkMG
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://sake92.github.io/sharaf/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/sake92/sharaf
    checkedAt: 2026-10-26
  - field: urls
    url: https://raw.githubusercontent.com/sake92/sharaf/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://repo1.maven.org/maven2/ba/sake/sharaf-undertow_3/0.20.0/sharaf-undertow_3-0.20.0.pom
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/sake92/sharaf
    checkedAt: 2026-10-26
  - field: category
    url: https://sake92.github.io/sharaf/
    checkedAt: 2026-10-26
  - field: runtime
    url: https://sake92.github.io/sharaf/reference/servers.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://sake92.github.io/sharaf/reference/dependencies.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://sake92.github.io/sharaf/tutorials/hello-world.html
    checkedAt: 2026-10-26
  - field: templating
    url: https://sake92.github.io/sharaf/philosophy/why-sharaf.html
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/sake92/sharaf/blob/main/LICENSE
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/sake92/sharaf/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/sake92/sharaf/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/sake92/sharaf/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/sake92/sharaf
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/sake92/sharaf/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Sharaf is a Scala 3 web framework. Routes match on the request method and path segments, and query strings, forms and JSON bodies are parsed into case classes, optionally with validation. HTML is written with Twirl, and server-sent events are supported. The Undertow integration is the stable one and runs on the JVM, and an app adds the library as a dependency for Scala CLI, sbt or Mill. The README's example starts the server from the app's own code.

The framework can also generate models and routes from an OpenAPI 3.0 or 3.1 document through OpenApi4s. The README lists GraalVM and Scala Native examples and an AWS Lambda starter that runs an Undertow app through the Lambda Web Adapter.

## Worth knowing

The [servers reference](https://sake92.github.io/sharaf/reference/servers.html) says the http4s, JDK HTTP server, Helidon and snunit integrations are beta or experimental, with narrower form handling, incomplete request features and possible changes between releases. The project is pre-1.0 and its releases are numbered 0.x.
