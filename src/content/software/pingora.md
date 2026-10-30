---
id: pingora
name: Pingora
urls:
  repository: https://github.com/cloudflare/pingora
  docs: https://github.com/cloudflare/pingora/blob/main/docs/user_guide/index.md
category:
  - framework
  - web-server
description: Rust framework for building fast, programmable network services, including HTTP proxies and load balancers.
status: active
maintainer: Cloudflare, Inc.
maintainerType: company
firstRelease: 2024
hqCountry: US
language: rust
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: cargo (crates.io)
licenseModel: open-source
license: Apache-2.0
currentMajor: "0"
latestReleaseDate: 2026-09-09
githubStargazers: 27743
contributors: 108
dependentPackages: 1
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://github.com/cloudflare/pingora
    checkedAt: 2026-10-30
  - field: urls
    url: https://github.com/cloudflare/pingora/blob/main/docs/user_guide/index.md
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://www.cloudflare.com/website-terms/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://www.cloudflare.com/website-terms/
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.cloudflare.com/website-terms/
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/cloudflare/pingora/blob/main/README.md
    checkedAt: 2026-10-30
  - field: category
    url: https://github.com/cloudflare/pingora/blob/main/README.md
    checkedAt: 2026-10-30
  - field: language
    url: https://github.com/cloudflare/pingora
    checkedAt: 2026-10-30
  - field: runtime
    url: https://github.com/cloudflare/pingora/blob/main/docs/user_guide/systemd.md
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://github.com/cloudflare/pingora/blob/main/docs/user_guide/daemon.md
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://github.com/cloudflare/pingora/blob/main/docs/quick_start.md
    checkedAt: 2026-10-30
  - field: license
    url: https://github.com/cloudflare/pingora/blob/main/README.md
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://github.com/cloudflare/pingora/blob/main/README.md
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://github.com/cloudflare/pingora/releases/tag/0.9.0
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://github.com/cloudflare/pingora/releases/tag/0.9.0
    checkedAt: 2026-10-30
  - field: firstRelease
    url: https://crates.io/api/v1/crates/pingora/versions
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://github.com/cloudflare/pingora
    checkedAt: 2026-10-30
  - field: contributors
    url: https://github.com/cloudflare/pingora
    checkedAt: 2026-10-30
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/crates.io/packages/pingora
    checkedAt: 2026-10-30
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Pingora is a framework written in Rust for network services, and the README describes APIs for building HTTP proxies. The quick start builds a load balancer with it. Cloudflare, Inc. maintains the project in its GitHub organization.

An application adds the pingora crate with cargo, Rust's package manager. The program is a server process that hosts one or more services and compiles to a binary. The [daemonization guide](https://github.com/cloudflare/pingora/blob/main/docs/user_guide/daemon.md) describes running it as a daemon.

## Worth knowing

The README marks the caching APIs as experimental and says they are highly volatile. Building needs Clang and Perl 5 installed on the system, according to the README.
