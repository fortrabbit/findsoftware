---
id: vinyl-cache
name: Vinyl Cache
urls:
  home: https://vinyl-cache.org
  repository: https://code.vinyl-cache.org/vinyl-cache/vinyl-cache
  docs: https://vinyl-cache.org/docs/9.1/
category:
  - web-server
description: Caching HTTP reverse proxy, installed in front of any HTTP server to cache its responses, configured with the Vinyl Configuration Language (VCL).
status: active
maintainer: The Vinyl Cache Project
maintainerType: community
hqCountry: DK
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: source tarball, FreeBSD package, OpenBSD package
licenseModel: open-source
license: BSD-2-Clause
currentMajor: "9"
latestReleaseDate: 2026-09-16
social:
  mastodon: https://fosstodon.org/@vinyl_cache
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: name
    url: https://vinyl-cache.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://vinyl-cache.org/
    checkedAt: 2026-10-19
  - field: urls
    url: https://code.vinyl-cache.org/api/v1/repos/vinyl-cache/vinyl-cache
    checkedAt: 2026-10-19
  - field: urls
    url: https://vinyl-cache.org/docs/9.1/
    checkedAt: 2026-10-19
  - field: category
    url: https://vinyl-cache.org/
    checkedAt: 2026-10-19
  - field: language
    url: https://code.vinyl-cache.org/api/v1/repos/vinyl-cache/vinyl-cache
    checkedAt: 2026-10-19
  - field: runtime
    url: https://vinyl-cache.org/docs/9.1/installation/install_source.html
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://vinyl-cache.org/organization/bylaws/bylaws_1.00.html
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://vinyl-cache.org/organization/bylaws/bylaws_1.00.html
    checkedAt: 2026-10-19
  - field: hqCountry
    url: https://vinyl-cache.org/organization/bylaws/bylaws_1.00.html
    checkedAt: 2026-10-19
  - field: license
    url: https://code.vinyl-cache.org/vinyl-cache/vinyl-cache/raw/branch/main/LICENSE
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://code.vinyl-cache.org/vinyl-cache/vinyl-cache/raw/branch/main/LICENSE
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://vinyl-cache.org/docs/9.1/installation/install.html
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://code.vinyl-cache.org/api/v1/repos/vinyl-cache/vinyl-cache/releases
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://code.vinyl-cache.org/api/v1/repos/vinyl-cache/vinyl-cache/releases
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://vinyl-cache.org/docs/9.1/tutorial/putting_vinyl_on_port_80.html
    checkedAt: 2026-10-19
figure:
  emoji: 🖥️
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: C · Server
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

Vinyl Cache sits in front of an existing HTTP server and caches that server's responses. It is configured in VCL, the Vinyl Configuration Language. It builds to a native binary and runs as a long-running process, so the host has to keep a process running beside the web server.

The project published its releases as Varnish Cache until it renamed itself. The Vinyl Cache Project, a voluntary association under Danish law, maintains it.

## Worth knowing

Varnish Software publishes its own distribution under the Varnish Cache name. That is a separate product and not covered by this record.
