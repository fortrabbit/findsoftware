---
id: iipsrv
name: IIPImage server
urls:
  home: https://iipimage.sourceforge.io
  repository: https://github.com/ruven/iipsrv
  docs: https://iipimage.sourceforge.io/documentation/
category:
  - media
description: FastCGI image server that streams tiles of very large images to web viewers using the IIP, IIIF, Zoomify and DeepZoom APIs.
status: active
maintainer: Ruven Pillay
maintainerType: individual
firstRelease: 2009
language: cpp
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: source build with autoconf (configure, make)
licenseModel: open-core
license: GPL-3.0, commercial license for use in a commercial product, on request
currentMajor: "1"
latestReleaseDate: 2025-05-28
githubStargazers: 326
contributors: 23
social:
  x: https://www.x.com/IIPImage
  facebook: https://www.facebook.com/IIPImage
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://iipimage.sourceforge.io/
    checkedAt: 2026-11-03
  - field: urls
    url: https://iipimage.sourceforge.io/documentation/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/ruven/iipsrv
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/ruven/iipsrv/commits/71b06757d8782e04acf5033a9d09561ce14f6296
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://iipimage.sourceforge.io/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/ruven/iipsrv
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/ruven/iipsrv/blob/master/README
    checkedAt: 2026-11-03
  - field: runtime
    url: https://github.com/ruven/iipsrv/blob/master/README
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://iipimage.sourceforge.io/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://iipimage.sourceforge.io/documentation/getting-started
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/ruven/iipsrv/blob/master/README
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://iipimage.sourceforge.io/download/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://iipimage.sourceforge.io/download/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://iipimage.sourceforge.io/download/
    checkedAt: 2026-11-03
  - field: license
    url: https://iipimage.sourceforge.io/download/
    checkedAt: 2026-11-03
  - field: license
    url: https://iipimage.sourceforge.io/download/
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://iipimage.sourceforge.io/download/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/ruven/iipsrv/releases
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/ruven/iipsrv/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/ruven/iipsrv
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/ruven/iipsrv/contributors
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

IIPImage's iipsrv is a FastCGI image server. A web server passes requests to it, and it cuts very large TIFF, JPEG 2000 and JPEG images into the tiles a viewer asks for. Only compressed views of an image are sent to the viewer, so the full-resolution file does not have to be publicly reachable.

It speaks the IIP, IIIF, Zoomify and DeepZoom APIs. The project names IIPMooViewer, OpenSeaDragon, Mirador and UniversalViewer as viewers that work with it. It writes JPEG, PNG, WebP, AVIF and TIFF output. It is installed from source with autoconf, from distribution packages, from a Windows or macOS archive, or from a Docker image.

## Worth knowing

The server source is licensed under GPL-3.0. The download page also offers a commercial license for use in a commercial product, on request. Optional JPEG 2000 input through Kakadu needs a separate commercial license for the library; OpenJPEG is the open option the README names for the same input.
