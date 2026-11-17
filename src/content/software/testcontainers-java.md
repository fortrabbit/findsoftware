---
id: testcontainers-java
name: Testcontainers for Java
urls:
  home: https://testcontainers.com/
  repository: https://github.com/testcontainers/testcontainers-java
  docs: https://java.testcontainers.org/
category:
  - testing
description: Java library for JUnit tests that starts throwaway instances of databases, Selenium browsers and other services in Docker containers.
status: active
maintainer: Richard North
firstRelease: 2015
language: java
runtime:
  - jvm
installMethod: maven, gradle, jitpack
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-04-20
githubStargazers: 8764
contributors: 441
dependentRepos: 9134
dependentPackages: 1632
social:
  x: https://twitter.com/testcontainers
  forum: https://github.com/testcontainers/testcontainers-java/discussions
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://testcontainers.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://java.testcontainers.org/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/testcontainers/testcontainers-java
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://raw.githubusercontent.com/testcontainers/testcontainers-java/main/LICENSE
    checkedAt: 2026-11-16
  - field: license
    url: https://api.github.com/repos/testcontainers/testcontainers-java
    checkedAt: 2026-11-16
  - field: licenseModel
    url: https://raw.githubusercontent.com/testcontainers/testcontainers-java/main/LICENSE
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/testcontainers/testcontainers-java
    checkedAt: 2026-11-16
  - field: runtime
    url: https://java.testcontainers.org/
    checkedAt: 2026-11-16
  - field: category
    url: https://java.testcontainers.org/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://java.testcontainers.org/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://java.testcontainers.org/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://raw.githubusercontent.com/testcontainers/testcontainers-java/main/docs/index.md
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/testcontainers/testcontainers-java/releases
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/testcontainers/testcontainers-java/releases
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:org.testcontainers+AND+a:testcontainers&core=gav&rows=200&wt=json
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/testcontainers/testcontainers-java
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/testcontainers/testcontainers-java/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/org.testcontainers%3Atestcontainers
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/org.testcontainers%3Atestcontainers
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
runtimeMin: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Testcontainers for Java is the Java build of the Testcontainers project, which gives tests throwaway instances of services running in Docker containers. The [Java docs](https://java.testcontainers.org/) cover its use with JUnit 4, JUnit 5 and Spock. Each specialised module has a separate JAR.

## Worth knowing

Tests need a Docker environment. The docs name Docker as a prerequisite and name Testcontainers Cloud as one way to get a compatible runtime; Testcontainers Cloud is a separate product, and this software does not include it.
