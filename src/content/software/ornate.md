---
id: ornate
name: Ornate
urls:
  home: https://szeiger.github.io/ornate-doc/
  repository: https://github.com/szeiger/ornate
  docs: https://szeiger.github.io/ornate-doc/
category:
  - ssg
description: Scala tool that builds multi-page HTML sites from Markdown sources, running on the JVM.
status: stub
maintainer: Stefan Zeiger
maintainerType: individual
firstRelease: 2016
language: scala
runtime:
  - jvm
runsAs:
  - local
installMethod: sbt plugin
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2019-06-11
githubStargazers: 80
contributors: 3
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://szeiger.github.io/ornate-doc/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/szeiger/ornate
    checkedAt: 2026-10-23
  - field: urls
    url: https://szeiger.github.io/ornate-doc/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/szeiger/ornate/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/szeiger/ornate
    checkedAt: 2026-10-23
  - field: runtime
    url: https://raw.githubusercontent.com/szeiger/ornate/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/szeiger/ornate/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://szeiger.github.io/ornate-doc/running.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://szeiger.github.io/ornate-doc/running.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://szeiger.github.io/ornate-doc/running.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://szeiger.github.io/ornate-doc/running.html
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/szeiger/ornate/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/szeiger/ornate/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/szeiger/ornate/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/szeiger/ornate/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/szeiger/ornate/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/szeiger/ornate
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/szeiger/ornate/contributors
    checkedAt: 2026-10-23
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Ornate is a Scala tool that builds multi-page HTML sites from Markdown sources and runs on the JVM. It is used from sbt, through an sbt plugin with the `sbt ornate` task, or from the command line with the core package. By default the site is written to `target/doc`.

## Worth knowing

The running page says Ornate requires Scala 2.11, while the v0.6 release notes say that version moved to Scala 2.12 and sbt 1.x, so the docs do not settle which Scala version to use.
