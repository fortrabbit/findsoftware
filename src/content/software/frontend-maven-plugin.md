---
id: frontend-maven-plugin
name: frontend-maven-plugin
urls:
  repository: https://github.com/eirslett/frontend-maven-plugin
  docs: https://github.com/eirslett/frontend-maven-plugin/blob/master/README.md
category:
  - build-tool
description: Maven plugin that downloads Node and npm for a project and runs npm, Yarn, Grunt, Gulp, Webpack and other frontend tools as part of the Maven build.
status: active
maintainer: Eirik Sletteberg
maintainerType: individual
firstRelease: 2013
language: java
runtime:
  - jvm
runsAs:
  - local
installMethod: Maven plugin declaration in pom.xml
licenseModel: open-source
license: Apache-2.0
currentMajor: "2"
latestReleaseDate: 2026-07-28
githubStargazers: 4382
contributors: 123
dependentRepos: 228
dependentPackages: 9
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/eirslett/frontend-maven-plugin
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/eirslett/frontend-maven-plugin/blob/master/README.md
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://search.maven.org/solrsearch/select?q=g:com.github.eirslett+AND+a:frontend-maven-plugin&core=gav&rows=200&wt=json
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/eirslett/frontend-maven-plugin/blob/frontend-plugins-2.0.2/pom.xml
    checkedAt: 2026-10-28
  - field: maintainerType
    url: https://api.github.com/users/eirslett
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/eirslett/frontend-maven-plugin
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/eirslett/frontend-maven-plugin/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/eirslett/frontend-maven-plugin/blob/master/README.md
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/eirslett/frontend-maven-plugin/blob/master/README.md
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/eirslett/frontend-maven-plugin/blob/master/README.md
    checkedAt: 2026-10-28
  - field: license
    url: https://api.github.com/repos/eirslett/frontend-maven-plugin
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/eirslett/frontend-maven-plugin/blob/master/README.md
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://repo1.maven.org/maven2/com/github/eirslett/frontend-maven-plugin/maven-metadata.xml
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://repo1.maven.org/maven2/com/github/eirslett/frontend-maven-plugin/maven-metadata.xml
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/eirslett/frontend-maven-plugin
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/eirslett/frontend-maven-plugin/contributors
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/com.github.eirslett:frontend-maven-plugin
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/repo1.maven.org/packages/com.github.eirslett:frontend-maven-plugin
    checkedAt: 2026-10-28
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

frontend-maven-plugin is a Maven plugin that downloads Node and npm into the project and runs npm, Yarn, Grunt, Gulp, Webpack and other frontend tools as part of a Maven build. It is declared as a plugin in `pom.xml`.

## Worth knowing

The plugin does not support a Node or npm that is already installed. The Node usage is intended as part of a frontend build.
