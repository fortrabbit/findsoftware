---
id: go-feature-flag
name: GO Feature Flag
urls:
  home: https://gofeatureflag.org
  repository: https://github.com/thomaspoignant/go-feature-flag
  docs: https://gofeatureflag.org/docs
  pricing: https://gofeatureflag.org/pricing
category:
  - dev-tool
description: Open-source, OpenFeature-native feature flag system whose flags are YAML files, served by a relay proxy or a Go module.
status: active
maintainer: Thomas Poignant
maintainerType: individual
firstRelease: 2020
language: go
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: docker pull gofeatureflag/go-feature-flag
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2026-11-02
githubStargazers: 2130
contributors: 102
social:
  x: https://x.com/gofeatureflag
  bluesky: https://bsky.app/profile/gofeatureflag.org
  youtube: https://youtube.com/@gofeatureflag
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://gofeatureflag.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/thomaspoignant/go-feature-flag
    checkedAt: 2026-11-03
  - field: urls
    url: https://gofeatureflag.org/docs
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/thomaspoignant/go-feature-flag/blob/v1.58.0/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://github.com/thomaspoignant/go-feature-flag/blob/v1.58.0/LICENSE
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/thomaspoignant/go-feature-flag/releases/tag/v0.1.0
    checkedAt: 2026-11-03
  - field: category
    url: https://gofeatureflag.org/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/thomaspoignant/go-feature-flag
    checkedAt: 2026-11-03
  - field: runtime
    url: https://gofeatureflag.org/docs/relay-proxy/install_relay_proxy
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gofeatureflag.org/docs/relay-proxy/install_relay_proxy
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gofeatureflag.org/docs/relay-proxy/install_relay_proxy
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gofeatureflag.org/docs/relay-proxy/install_relay_proxy
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gofeatureflag.org/docs/relay-proxy/deployment
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://gofeatureflag.org/docs/relay-proxy/deployment
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://gofeatureflag.org/docs/relay-proxy
    checkedAt: 2026-11-03
  - field: license
    url: https://gofeatureflag.org/
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://gofeatureflag.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://gofeatureflag.org/pricing
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/thomaspoignant/go-feature-flag/releases/tag/v1.58.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/thomaspoignant/go-feature-flag/releases/tags/v1.58.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/thomaspoignant/go-feature-flag
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/thomaspoignant/go-feature-flag/contributors?per_page=1
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

GO Feature Flag keeps feature flags in YAML files. A relay proxy loads those files from a location such as S3, GitHub or a Kubernetes ConfigMap, holds them in memory, and answers flag evaluations from OpenFeature SDKs in the application. Rollout percentages, targeting rules and new flags are edits to the files, and the proxy picks them up on its periodic polling. The software is built on OpenFeature, and the homepage lists SDKs for JavaScript, Swift, Kotlin, Go, Java, .NET, Python, PHP, Ruby, Rust and other languages. A Go service that does not want to run the proxy can use the Go module, which contains the same logic. The relay proxy installs from a Docker image, Homebrew or a binary, and the deployment guide covers Kubernetes with Helm and AWS Lambda.

## Worth knowing

The relay proxy needs no database; its flags are the files it loads. Changes reach running proxies on the next poll, not at the moment the file is saved. The pricing page offers paid support and training on an Enterprise plan, and the software itself is MIT-licensed and free to use.
