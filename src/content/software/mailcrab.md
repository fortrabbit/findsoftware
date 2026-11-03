---
id: mailcrab
name: MailCrab
urls:
  repository: https://github.com/tweedegolf/mailcrab
category:
  - dev-tool
  - email
description: Email test server for development that accepts SMTP mail and shows it in a web interface, written in Rust.
status: active
maintainer: tweedegolf
firstRelease: 2023
language: rust
runtime:
  - binary
hosting:
  - binary
adminUi: true
runsAs:
  - local
  - always-on
installMethod: docker
licenseModel: open-source
license: Apache-2.0, Apache-2.0 OR MIT
currentMajor: "1"
latestReleaseDate: 2026-09-17
githubStargazers: 1002
contributors: 19
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://api.github.com/repos/tweedegolf/mailcrab
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://api.github.com/repos/tweedegolf/mailcrab
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/tweedegolf/mailcrab/blob/main/README.md
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/tweedegolf/mailcrab
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/tweedegolf/mailcrab/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/tweedegolf/mailcrab/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/tweedegolf/mailcrab/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/tweedegolf/mailcrab/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/tweedegolf/mailcrab/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/tweedegolf/mailcrab/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/tweedegolf/mailcrab/blob/main/flydotio_deployment.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/tweedegolf/mailcrab
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/tweedegolf/mailcrab/blob/v1.9.0/mailcrab/Cargo.toml
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://api.github.com/repos/tweedegolf/mailcrab
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/tweedegolf/mailcrab/releases
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/tweedegolf/mailcrab/releases/tag/v1.9.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://hub.docker.com/v2/repositories/marlonb/mailcrab/tags/
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/tweedegolf/mailcrab
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/tweedegolf/mailcrab/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/tweedegolf/mailcrab/blob/main/README.md
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

MailCrab is an email test server for development, written in Rust. It accepts all SMTP mail, keeps it in memory while it runs, and shows it in a web interface that also displays attachments, headers and the raw message. The README describes it as inspired by MailHog and MailCatcher.

It runs from a Docker image, a single binary build, or a Helm chart on Kubernetes.

## Worth knowing

The README describes MailCrab as a development tool, not a service for live mail. Messages stay in memory until a restart unless a retention period clears older ones.
