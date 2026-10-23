---
id: cryogen
name: Cryogen
urls:
  home: https://cryogenweb.org/
  repository: https://github.com/cryogen-project/cryogen
  docs: https://cryogenweb.org/docs/configuration.html
category:
  - ssg
description: Static site generator written in Clojure, with Markdown or AsciiDoc posts, tags, RSS and sitemap output.
status: stub
maintainer: Carmen La
firstRelease: 2017
hosting:
  - static
templating: selmer
runsAs:
  - static
renderingModes:
  - static
installMethod: Leiningen template (lein new cryogen)
license: EPL-1.0
currentMajor: "0"
latestReleaseDate: 2021-10-15
githubStargazers: 1133
contributors: 57
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://cryogenweb.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/cryogen-project/cryogen
    checkedAt: 2026-10-23
  - field: urls
    url: https://cryogenweb.org/docs/configuration.html
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://cryogenweb.org/
    checkedAt: 2026-10-23
  - field: category
    url: https://api.github.com/repos/cryogen-project/cryogen
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/cryogen-project/cryogen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://cryogenweb.org/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/cryogen-project/cryogen
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/cryogen-project/cryogen/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/cryogen-project/cryogen/releases/latest
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/cryogen-project/cryogen/releases/latest
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/cryogen-project/cryogen
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/cryogen-project/cryogen/contributors
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/cryogen-project/cryogen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/cryogen-project/cryogen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/cryogen-project/cryogen/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/cryogen-project/cryogen/blob/master/README.md
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Cryogen is a static site generator written in Clojure. A new site is created from a Leiningen template with `lein new cryogen`, or with the Clojure CLI tools clj-new and deps-new. Posts and pages are Markdown files by default, with AsciiDoc as an alternative, and the layouts use the Selmer templating engine.

The generated site is static files in a `public` folder, which the [deployment documentation](https://cryogenweb.org/docs/deploying-to-github-pages.html) shows publishing through GitHub Pages and Netlify. The homepage copyright line names Carmen La.
