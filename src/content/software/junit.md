---
id: junit
name: JUnit
urls:
  home: https://junit.org
  repository: https://github.com/junit-team/junit-framework
  docs: https://docs.junit.org/
category:
  - testing
description: Testing framework for writing and running tests on Java and the JVM, made of the JUnit Platform, Jupiter and Vintage.
status: active
maintainer: The JUnit Team
maintainerType: community
language: java
runtime:
  - jvm
runtimeMin: jvm 17
runsAs:
  - local
installMethod: Maven, Gradle
licenseModel: open-source
license: EPL-2.0
currentMajor: "6"
latestReleaseDate: 2026-08-07
githubStargazers: 7064
contributors: 268
dependentRepos: 66131
dependentPackages: 5839
social:
  bluesky: https://bsky.app/profile/junit.org
  mastodon: https://fosstodon.org/@junit
  forum: https://github.com/junit-team/junit-framework/discussions/categories/q-a
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://junit.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/junit-team/junit-framework
    checkedAt: 2026-11-16
  - field: urls
    url: https://docs.junit.org/6.1.3/overview.html
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://junit.org/
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/junit-team/junit-framework
    checkedAt: 2026-11-16
  - field: license
    url: https://raw.githubusercontent.com/junit-team/junit-framework/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://docs.junit.org/6.1.3/overview.html
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/junit-team/junit-framework/main/LICENSE.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/junit-team/junit-framework
    checkedAt: 2026-11-16
  - field: category
    url: https://junit.org/
    checkedAt: 2026-11-16
  - field: runtime
    url: https://docs.junit.org/6.1.3/overview.html
    checkedAt: 2026-11-16
  - field: runtimeMin
    url: https://docs.junit.org/6.1.3/overview.html
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.junit.org/6.1.3/running-tests/build-support.html#maven
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://docs.junit.org/6.1.3/running-tests/build-support.html#gradle
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/org.junit.jupiter:junit-jupiter
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/org.junit.jupiter:junit-jupiter
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/junit-team/junit-framework
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/junit-team/junit-framework/contributors
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/junit-team/junit-framework/releases/tags/r6.1.3
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/junit-team/junit-framework/releases/tags/r6.1.3
    checkedAt: 2026-11-16
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

JUnit is a testing framework for writing and running tests on Java and the JVM. It is built from the JUnit Platform, which launches test engines; the Jupiter programming model, which holds the API for writing tests; and the Vintage engine, which runs tests from the two older generations on the platform. Build tools and IDEs run the platform, and the Console Launcher starts it from the command line.

The user guide documents setup for Maven and Gradle, and the Jupiter artifacts are published to Maven Central. The source sits in one repository.

## Worth knowing

The user guide calls the Vintage engine deprecated and says to use it only temporarily while migrating tests to Jupiter or another framework with native platform support.
