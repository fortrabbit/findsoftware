---
id: binding-scala
name: Binding.scala
urls:
  repository: https://github.com/ThoughtWorksInc/Binding.scala
  docs: https://javadoc.io/page/com.thoughtworks.binding/binding_2.13/latest/com/thoughtworks/binding/index.html
category:
  - library
description: Scala data-binding library for the JVM and Scala.js, with expressions that recalculate when their dependencies change.
status: active
maintainer: Yang Bo & REA Group Ltd.
maintainerType: company
firstRelease: 2016
runtime:
  - jvm
hosting:
  - java
installMethod: sbt library dependency
licenseModel: open-source
license: MIT
currentMajor: "12"
latestReleaseDate: 2023-01-26
githubStargazers: 1572
contributors: 17
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://api.github.com/repos/ThoughtWorksInc/Binding.scala
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/ThoughtWorksInc/Binding.scala/blob/12.x/README.md
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://raw.githubusercontent.com/ThoughtWorksInc/Binding.scala/12.x/LICENSE
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/ThoughtWorksInc/Binding.scala/blob/12.x/README.md
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/ThoughtWorksInc/Binding.scala/blob/12.x/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/ThoughtWorksInc/Binding.scala/blob/12.x/README.md
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/ThoughtWorksInc/Binding.scala
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://raw.githubusercontent.com/ThoughtWorksInc/Binding.scala/12.x/LICENSE
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://api.github.com/repos/ThoughtWorksInc/Binding.scala/releases
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/ThoughtWorksInc/Binding.scala/releases
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/ThoughtWorksInc/Binding.scala/releases
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/ThoughtWorksInc/Binding.scala
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/ThoughtWorksInc/Binding.scala/contributors?per_page=1
    checkedAt: 2026-10-24
figure:
  emoji: 📐
  color: "#c5e1a5"
  textColor: "#1a1a1a"
  text: Library
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
runsAs: null
---

Binding.scala is a data-binding library for Scala that runs on the JVM and on Scala.js. Its data-binding expressions recalculate when the values they depend on change, and the core module is added to an sbt build as a library dependency. The current line ships no UI framework of its own; the README points to html.scala, which builds an HTML UI on top of Binding.scala.

## Worth knowing

The README states that the current line only works on one Scala version series and sends projects on older Scala versions to an earlier line of the library, which it links.
