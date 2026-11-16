---
id: monaco-editor
name: Monaco Editor
urls:
  home: https://microsoft.github.io/monaco-editor/
  repository: https://github.com/microsoft/monaco-editor
  docs: https://microsoft.github.io/monaco-editor/docs.html
category:
  - ui-library
description: Browser-based code editor library, generated from the source of the VS Code editor.
status: active
maintainer: Microsoft Corporation
maintainerType: company
firstRelease: 2016
hqCountry: US
language: javascript
i18n: UI language set by loading a locale message script (nls) before the editor script
runsAs:
  - browser
installMethod: npm
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-09-24
githubStargazers: 46978
npmWeeklyDownloads: 13464200
contributors: 287
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://api.github.com/repos/microsoft/monaco-editor
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/microsoft/monaco-editor
    checkedAt: 2026-11-16
  - field: urls
    url: https://github.com/microsoft/monaco-editor/blob/main/README.md
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://registry.npmjs.org/monaco-editor
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: maintainerType
    url: https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: hqCountry
    url: https://privacy.microsoft.com/en-us/privacystatement
    checkedAt: 2026-11-16
  - field: category
    url: https://github.com/microsoft/monaco-editor/blob/main/README.md
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/microsoft/monaco-editor
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://github.com/microsoft/monaco-editor/blob/main/README.md
    checkedAt: 2026-11-16
  - field: i18n
    url: https://github.com/microsoft/monaco-editor/blob/main/README.md
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://github.com/microsoft/monaco-editor/blob/main/README.md
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://github.com/microsoft/monaco-editor/releases/tag/v0.57.0
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://github.com/microsoft/monaco-editor/releases/tag/v0.57.0
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/microsoft/monaco-editor
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/microsoft/monaco-editor/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/monaco-editor
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
hosting: null
runtimeMin: null
packagistDownloads: null
---

Monaco Editor is the code editor from VS Code, packaged as a JavaScript library that a web page loads and runs in the browser. The project generates it from VS Code's sources with shims around the services that code needs outside VS Code. The README describes its core as models (the content of an open file, identified by a URI), editors (the view of a model) and providers (language features such as completion and hover). A locale script loaded before the main script changes the interface language. The [API docs](https://microsoft.github.io/monaco-editor/docs.html) describe the API.

## Worth knowing

The README says the editor is not supported in mobile browsers or mobile web app frameworks. It does not support TextMate grammars; the README links a third-party bridge for them. The AMD build is deprecated, and the README says it will be removed. Web workers need the page served over http or https, not from a file path.
