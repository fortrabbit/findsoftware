---
id: imgproxy
name: imgproxy
urls:
  home: https://imgproxy.net
  repository: https://github.com/imgproxy/imgproxy
  docs: https://docs.imgproxy.net
  pricing: https://imgproxy.net/pricing
category:
  - media
description: Server for on-the-fly image processing, resizing and format conversion, driven by URL parameters.
status: active
maintainer: Foxes With Matches, Inc.
maintainerType: company
language: go
runsAs:
  - always-on
installMethod: docker, linux-package-build-script, aws-cloudformation-template
licenseModel: open-core
license: Apache-2.0, MIT
currentMajor: "4"
latestReleaseDate: 2026-10-14
githubStargazers: 11129
contributors: 119
addedAt: 2026-10-19
checkedAt: 2026-10-19
sources:
  - field: urls
    url: https://imgproxy.net
    checkedAt: 2026-10-19
  - field: urls
    url: https://github.com/imgproxy/imgproxy
    checkedAt: 2026-10-19
  - field: urls
    url: https://docs.imgproxy.net
    checkedAt: 2026-10-19
  - field: maintainer
    url: https://docs.imgproxy.net
    checkedAt: 2026-10-19
  - field: maintainerType
    url: https://docs.imgproxy.net
    checkedAt: 2026-10-19
  - field: language
    url: https://github.com/imgproxy/imgproxy
    checkedAt: 2026-10-19
  - field: installMethod
    url: https://docs.imgproxy.net/installation
    checkedAt: 2026-10-19
  - field: category
    url: https://imgproxy.net
    checkedAt: 2026-10-19
  - field: license
    url: https://github.com/imgproxy/imgproxy/blob/v4.0.18/LICENSE
    checkedAt: 2026-10-19
  - field: license
    url: https://docs.imgproxy.net
    checkedAt: 2026-10-19
  - field: licenseModel
    url: https://imgproxy.net
    checkedAt: 2026-10-19
  - field: urls
    url: https://imgproxy.net/pricing
    checkedAt: 2026-10-19
  - field: currentMajor
    url: https://github.com/imgproxy/imgproxy/releases/tag/v4.0.18
    checkedAt: 2026-10-19
  - field: latestReleaseDate
    url: https://github.com/imgproxy/imgproxy/releases/tag/v4.0.18
    checkedAt: 2026-10-19
  - field: githubStargazers
    url: https://github.com/imgproxy/imgproxy
    checkedAt: 2026-10-19
  - field: contributors
    url: https://github.com/imgproxy/imgproxy
    checkedAt: 2026-10-19
  - field: runsAs
    url: https://docs.imgproxy.net/installation
    checkedAt: 2026-10-19
figure:
  emoji: 🖼️
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Go · Media
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

imgproxy is an image server that resizes and converts images on the fly, driven by parameters in the request URL. It is written in Go and depends on the libvips image library, as the [installation docs](https://docs.imgproxy.net/installation) note. The docs recommend running it as a standalone application in a Docker container from the official image on GitHub Container Registry. Other install paths are a Linux package build script and an AWS CloudFormation template. Foxes With Matches, Inc. develops the project.

## Worth knowing

The open-source version holds all free features, and a closed-source Pro version is sold separately. The license is stated two ways: the LICENSE file names Apache-2.0, while the [docs](https://docs.imgproxy.net) say MIT.
