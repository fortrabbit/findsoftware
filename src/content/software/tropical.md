---
id: tropical
name: Tropical
urls:
  home: https://tropical.js.org
  repository: https://github.com/bensmithett/tropical
  docs: https://tropical.js.org/docs/
category:
  - ssg
description: Static site generator built with React and Vite that prerenders pages to HTML, with opt-in browser JavaScript through islands.
status: stub
maintainer: Ben Smithett
maintainerType: individual
firstRelease: 2020
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 16
basedOn:
  - react
  - vite
contentStore:
  - flat-file
templating: jsx
runsAs:
  - static
renderingModes:
  - static
installMethod: GitHub template repository, then install dependencies with yarn or npm
licenseModel: open-source
license: MIT
currentMajor: "11"
latestReleaseDate: 2022-09-06
githubStargazers: 173
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://tropical.js.org/
    checkedAt: 2026-10-23
  - field: urls
    url: https://tropical.js.org/docs/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/bensmithett/tropical
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/bensmithett/tropical/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/bensmithett/tropical
    checkedAt: 2026-10-23
  - field: category
    url: https://tropical.js.org/
    checkedAt: 2026-10-23
  - field: basedOn
    url: https://tropical.js.org/
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/bensmithett/tropical/blob/v11.4.2/package.json
    checkedAt: 2026-10-23
  - field: runtimeMin
    url: https://github.com/bensmithett/tropical/blob/v11.4.2/package.json
    checkedAt: 2026-10-23
  - field: templating
    url: https://tropical.js.org/docs/pages
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://tropical.js.org/docs/pages
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://tropical.js.org/docs/
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://tropical.js.org/docs/
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://tropical.js.org/docs/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/bensmithett/tropical
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/bensmithett/tropical/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/bensmithett/tropical/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/bensmithett/tropical/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/bensmithett/tropical/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/bensmithett/tropical
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/bensmithett/tropical/contributors
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · SSG
ai: authored
packagistDownloads: null
---

Tropical is a static site generator that ships as a GitHub template repository. A new site starts as a copy of the template, and its pages are MDX or JSX files in `src/pages`. The build renders them to HTML with React, using Vite for the build.

Components render to HTML with no browser JavaScript by default. Interactive parts are added as islands with the `tropical-islands` package: a component wrapped in `Island` is hydrated in the browser through `src/entry-client.jsx`. A site can also attach plain JavaScript or another library to the server-rendered HTML instead.

## Worth knowing

The template has no package version to upgrade in place. Each release publishes guides for updating dependencies and conventions, so a site keeps its own copy of the code and applies those changes itself.
