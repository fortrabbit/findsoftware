---
id: electric
name: Electric Clojure
urls:
  home: https://electric.hyperfiddle.net/
  repository: https://github.com/hyperfiddle/electric
  docs: https://docs.google.com/document/d/1frkb5URGFZUdWyCDl9moGFcPcLuDtW-M-HnCJOHkuDA/
category:
  - framework
description: Clojure dialect and library for full-stack reactive web interfaces, whose compiler infers the frontend and backend boundary.
status: active
maintainer: Hyperfiddle
firstRelease: 2022
language: clojure
runtime:
  - jvm
hosting:
  - java
runsAs:
  - always-on
installMethod: add com.hyperfiddle/electric as a deps.edn dependency, or clone the starter app
licenseModel: source-available
license: Hyperfiddle Business Source License, free for bootstrappers and non-commercial use, otherwise commercial
githubStargazers: 2142
contributors: 15
social:
  x: https://x.com/dustingetz
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://github.com/hyperfiddle/electric3-starter-app/blob/master/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/hyperfiddle/electric
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/hyperfiddle/electric/blob/master/Readme.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://tana.pub/lQwRvGRaQ7hM/electric-v3-license-change
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/hyperfiddle/electric
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/hyperfiddle/electric3-starter-app/blob/master/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://clojars.org/api/artifacts/com.hyperfiddle/electric
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/hyperfiddle/electric/blob/master/Readme.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.google.com/document/d/1TgExchcIyWd4BH9qwb4vjp7uaBjWyBtPWEkGqSfvlTk/export?format=txt
    checkedAt: 2026-10-26
  - field: license
    url: https://clojars.org/api/artifacts/com.hyperfiddle/electric
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/hyperfiddle/electric/blob/master/Readme.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://tana.pub/lQwRvGRaQ7hM/electric-v3-license-change
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/hyperfiddle/electric/commits/v20220722
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/hyperfiddle/electric
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/hyperfiddle/electric/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Electric Clojure is a Clojure dialect for building full-stack web interfaces. Client and server expressions sit in the same function, and the Electric compiler infers where the frontend and backend split, then generates separate client and server programs from the one source. The README calls the approach full-stack differential dataflow for UI.

A project can take the library as a Clojure dependency, or start from the starter app, which runs in development with `clj -A:dev -X dev/-main`. The starter app's README gives production builds as an uberjar, a Docker image and a Fly deployment.

## Worth knowing

The project's own documents say it assumes a persistent server connection and is not built for server-side rendering.

The README says the software is free for bootstrappers and non-commercial use. Commercial use is licensed separately under a source-available business license, as the maintainer's license announcement describes.
