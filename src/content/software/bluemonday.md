---
id: bluemonday
name: bluemonday
urls:
  repository: https://github.com/microcosm-cc/bluemonday
category:
  - library
description: HTML sanitizer for Go that removes markup outside an allowlist from untrusted input, such as user generated content.
status: active
maintainer: David Kitchen
firstRelease: 2018
language: go
runtime:
  - binary
hosting:
  - binary
installMethod: go get
licenseModel: open-source
license: BSD-3-Clause
currentMajor: "1"
latestReleaseDate: 2024-07-04
githubStargazers: 3731
contributors: 29
addedAt: 2026-11-04
checkedAt: 2026-11-04
sources:
  - field: urls
    url: https://api.github.com/repos/microcosm-cc/bluemonday
    checkedAt: 2026-11-04
  - field: maintainer
    url: https://raw.githubusercontent.com/microcosm-cc/bluemonday/main/LICENSE.md
    checkedAt: 2026-11-04
  - field: language
    url: https://api.github.com/repos/microcosm-cc/bluemonday
    checkedAt: 2026-11-04
  - field: runtime
    url: https://raw.githubusercontent.com/microcosm-cc/bluemonday/main/README.md
    checkedAt: 2026-11-04
  - field: category
    url: https://raw.githubusercontent.com/microcosm-cc/bluemonday/main/README.md
    checkedAt: 2026-11-04
  - field: installMethod
    url: https://raw.githubusercontent.com/microcosm-cc/bluemonday/main/README.md
    checkedAt: 2026-11-04
  - field: license
    url: https://raw.githubusercontent.com/microcosm-cc/bluemonday/main/LICENSE.md
    checkedAt: 2026-11-04
  - field: licenseModel
    url: https://raw.githubusercontent.com/microcosm-cc/bluemonday/main/LICENSE.md
    checkedAt: 2026-11-04
  - field: firstRelease
    url: https://proxy.golang.org/github.com/microcosm-cc/bluemonday/@v/v1.0.0.info
    checkedAt: 2026-11-04
  - field: currentMajor
    url: https://proxy.golang.org/github.com/microcosm-cc/bluemonday/@v/v1.0.27.info
    checkedAt: 2026-11-04
  - field: latestReleaseDate
    url: https://proxy.golang.org/github.com/microcosm-cc/bluemonday/@v/v1.0.27.info
    checkedAt: 2026-11-04
  - field: githubStargazers
    url: https://api.github.com/repos/microcosm-cc/bluemonday
    checkedAt: 2026-11-04
  - field: contributors
    url: https://api.github.com/repos/microcosm-cc/bluemonday/contributors?per_page=1
    checkedAt: 2026-11-04
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
runsAs: null
---

bluemonday is an HTML sanitizer for Go. It takes untrusted HTML, such as user generated content, and returns HTML limited to an allowlist of elements and attributes. A Go server builds a policy, either from the two policies the library ships or from its own rules, and applies it to each input. The library is installed with `go get`.

## Worth knowing

The README asks that bluemonday run after any other HTML processing, such as Markdown rendering, so that no unsanitized markup is added later. Script and style elements are dropped unless the policy enables them.
