---
id: varnish
name: Varnish Cache
urls:
  home: https://www.varnish.org/
  repository: https://github.com/varnish/varnish
  docs: https://www.varnish.org/docs/
  pricing: https://www.varnish-software.com/pricing/
category:
  - web-server
description: Open-source HTTP accelerator and reverse caching proxy that serves cached responses from memory in front of an origin server.
status: active
maintainer: Varnish Software AB
maintainerType: company
hqCountry: SE
language: c
runtime:
  - binary
hosting:
  - binary
basedOn:
  - vinyl-cache
runsAs:
  - always-on
installMethod: docker image
licenseModel: open-core
license: BSD-2-Clause
currentMajor: "9"
latestReleaseDate: 2026-09-23
githubStargazers: 81
contributors: 105
social:
  x: https://x.com/varnishcache
  discord: https://discord.com/invite/EuwdvbZR6d
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: urls
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://api.github.com/repos/varnish/varnish
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.varnish.org/docs/
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://www.varnish-software.com/contact-us/
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://www.varnish-software.com/contact-us/
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.varnish-software.com/contact-us/
    checkedAt: 2026-10-30
  - field: category
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: basedOn
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: language
    url: https://api.github.com/repos/varnish/varnish/languages
    checkedAt: 2026-10-30
  - field: runtime
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://www.varnish.org/docs/install-guide/install-debian-ubuntu/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://www.varnish.org/releases/
    checkedAt: 2026-10-30
  - field: license
    url: https://raw.githubusercontent.com/varnish/varnish/main/LICENSE
    checkedAt: 2026-10-30
  - field: licenseModel
    url: https://www.varnish.org/
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.varnish-software.com/pricing/
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://api.github.com/repos/varnish/varnish/releases/latest
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://www.varnish.org/releases/
    checkedAt: 2026-10-30
  - field: githubStargazers
    url: https://api.github.com/repos/varnish/varnish
    checkedAt: 2026-10-30
  - field: contributors
    url: https://api.github.com/repos/varnish/varnish/contributors?per_page=1
    checkedAt: 2026-10-30
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

Varnish Cache is an HTTP accelerator that sits between clients and an origin server. It answers from memory when it holds a cached response and forwards other requests to the origin, and it has native TLS support.

The project describes itself as a distribution of the Vinyl Cache project, with extra modules and tooling layered on top, and the repository's LICENSE file now names the Vinyl Cache Project. The [install guide](https://www.varnish.org/docs/install-guide/install-debian-ubuntu/) covers Debian and Ubuntu packages, and the homepage also names RPM packages, a Docker image and a Helm chart for Kubernetes. Varnish Software AB, headquartered in Stockholm, Sweden, maintains the distribution.

## Worth knowing

On package installs the varnishd process is managed by systemd, so it runs as a long-lived service.
