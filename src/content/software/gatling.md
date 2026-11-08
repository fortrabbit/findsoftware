---
id: gatling
name: Gatling
urls:
  home: https://gatling.io
  repository: https://github.com/gatling/gatling
  docs: https://docs.gatling.io/
  pricing: https://gatling.io/pricing
category:
  - testing
description: Load testing tool that runs performance scenarios written as code and produces an HTML report for each run.
status: active
maintainer: Gatling Corp
maintainerType: company
firstRelease: 2011
hqCountry: FR
language: scala
runtime:
  - jvm
runtimeMin: jvm 11
runsAs:
  - local
installMethod: maven
licenseModel: open-source
license: Apache-2.0, Gatling-Highcharts License
currentMajor: "3"
latestReleaseDate: 2026-09-29
githubStargazers: 6959
contributors: 192
dependentRepos: 56
dependentPackages: 51
social:
  x: https://x.com/GatlingTool
  forum: https://community.gatling.io/
  youtube: https://www.youtube.com/@gatlingcorp
addedAt: 2026-11-08
checkedAt: 2026-11-08
sources:
  - field: urls
    url: https://github.com/gatling/gatling
    checkedAt: 2026-11-08
  - field: urls
    url: https://api.github.com/repos/gatling/gatling
    checkedAt: 2026-11-08
  - field: urls
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: urls
    url: https://gatling.io/
    checkedAt: 2026-11-08
  - field: maintainer
    url: https://gatling.io/terms-of-service
    checkedAt: 2026-11-08
  - field: hqCountry
    url: https://gatling.io/terms-of-service
    checkedAt: 2026-11-08
  - field: firstRelease
    url: https://api.github.com/repos/gatling/gatling/commits/1.0.0
    checkedAt: 2026-11-08
  - field: category
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: language
    url: https://api.github.com/repos/gatling/gatling
    checkedAt: 2026-11-08
  - field: runtime
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: runtimeMin
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: installMethod
    url: https://docs.gatling.io/reference/deploy/install-local/
    checkedAt: 2026-11-08
  - field: runsAs
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/gatling/gatling/blob/main/README.md
    checkedAt: 2026-11-08
  - field: license
    url: https://github.com/gatling/gatling/blob/main/license/LICENSE.gatling-highcharts.specific.txt
    checkedAt: 2026-11-08
  - field: currentMajor
    url: https://api.github.com/repos/gatling/gatling/releases/tags/v3.16.0
    checkedAt: 2026-11-08
  - field: latestReleaseDate
    url: https://api.github.com/repos/gatling/gatling/releases/tags/v3.16.0
    checkedAt: 2026-11-08
  - field: githubStargazers
    url: https://api.github.com/repos/gatling/gatling
    checkedAt: 2026-11-08
  - field: contributors
    url: https://api.github.com/repos/gatling/gatling/contributors?per_page=1
    checkedAt: 2026-11-08
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/io.gatling:gatling-core
    checkedAt: 2026-11-08
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/io.gatling:gatling-core
    checkedAt: 2026-11-08
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
hosting: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Gatling runs load tests whose scenarios, called simulations, are written as code. Simulations run on the JVM, and build plugins for Maven, Gradle and sbt start them from a project. The README says the same simulation can run on a developer's machine or in CI, and each run produces an HTML report. This repository is the Community Edition.

## Worth knowing

Gatling Enterprise Edition is a commercial product built on the same engine, with team features and managed or private load generators, and the terms page describes its console as a SaaS. The report generation module in the repository has its own license, which forbids modifying or reusing the module code. The gRPC, MQTT, GraphQL and JDBC components are separate dependencies under the Gatling Enterprise Component License, and the Community Edition limits them to 5 concurrent users and 5 minute tests.
