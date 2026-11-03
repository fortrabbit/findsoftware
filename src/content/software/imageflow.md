---
id: imageflow
name: Imageflow
urls:
  home: https://www.imageflow.io
  repository: https://github.com/imazen/imageflow
  docs: https://docs.imageflow.io
  pricing: https://www.imazen.io/pricing
category:
  - media
description: Image processing library and command-line tool for resizing, cropping and encoding images.
status: active
maintainer: Imazen LLC
maintainerType: company
firstRelease: 2016
language: rust
runtime:
  - binary
hosting:
  - binary
installMethod: binary download
licenseModel: open-core
license: AGPL-3.0, Commercial license, offered alongside AGPL-3.0
githubStargazers: 4458
contributors: 21
social:
  x: https://twitter.com/imageflow_io
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://www.imageflow.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://docs.imageflow.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/imazen/imageflow
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://www.imazen.io/legal/subscription-terms
    checkedAt: 2026-11-03
  - field: language
    url: https://github.com/imazen/imageflow
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/imazen/imageflow/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/imazen/imageflow/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/imazen/imageflow/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/imazen/imageflow/blob/main/README.md
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/imazen/imageflow/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/imazen/imageflow/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: license
    url: https://www.imageflow.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.imazen.io/pricing
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/imazen/imageflow/releases/tag/v0.0.7
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/imazen/imageflow
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/imazen/imageflow
    checkedAt: 2026-11-03
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
---

Imageflow is an image processing library and command-line tool for resizing, cropping and encoding images. The [README](https://github.com/imazen/imageflow) describes two ways to use it in this repository: `imageflow_tool` on the command line, for batch runs and JSON job files, and `libimageflow`, linked into a program in-process through language bindings. Binaries for Windows, Ubuntu and macOS are published with the releases, Docker images cover Linux, and a build from source needs a Rust toolchain and some C dependencies. Imazen LLC maintains the project.

This repository no longer contains an HTTP server. The README says the earlier imageflow_server was removed because the web framework it used is abandoned, and it points to Imageflow.Server, which lives in a separate repository.

## Worth knowing

The software is offered under the AGPLv3, and the project also offers commercial licenses for users who do not want the AGPL terms. The repository has no stable release: its newest release is a release candidate, and the README badge reads "release candidate".
