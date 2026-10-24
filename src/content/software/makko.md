---
id: makko
name: Makko
urls:
  home: https://makko.starlightnet.work
  repository: https://forge.starlightnet.work/Team/Makko
  docs: https://makko.starlightnet.work/english.html
category:
  - ssg
description: Markdown-based static site generator for blogs and websites, written in Zig.
status: active
maintainer: The Starlight Network
firstRelease: 2025
hosting:
  - static
contentStore:
  - flat-file
templating: mustache
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: binary download from the releases page
licenseModel: open-source
license: Zlib
currentMajor: "3"
latestReleaseDate: 2026-08-04
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://makko.starlightnet.work/
    checkedAt: 2026-10-23
  - field: urls
    url: https://forge.starlightnet.work/api/v1/repos/Team/Makko
    checkedAt: 2026-10-23
  - field: urls
    url: https://makko.starlightnet.work/english.html
    checkedAt: 2026-10-23
  - field: category
    url: https://makko.starlightnet.work/english.html
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://forge.starlightnet.work/api/v1/repos/Team/Makko/contents/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://forge.starlightnet.work/api/v1/repos/Team/Makko/contents/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://makko.starlightnet.work/english.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://makko.starlightnet.work/english.html
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://makko.starlightnet.work/english.html
    checkedAt: 2026-10-23
  - field: templating
    url: https://makko.starlightnet.work/english.html
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://makko.starlightnet.work/english.html
    checkedAt: 2026-10-23
  - field: license
    url: https://forge.starlightnet.work/api/v1/repos/Team/Makko/contents/LICENSE
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://makko.starlightnet.work/
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://forge.starlightnet.work/api/v1/repos/Team/Makko/contents/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://forge.starlightnet.work/api/v1/repos/Team/Makko/releases?limit=50
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://forge.starlightnet.work/api/v1/repos/Team/Makko/releases?limit=50
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://forge.starlightnet.work/api/v1/repos/Team/Makko/releases?limit=50
    checkedAt: 2026-10-23
ai: authored
---

Makko is a static site generator that turns Markdown posts into a website, with templates written in Mustache. It is a single command-line binary built with the Zig compiler: a project folder holds the posts, the templates and a `makko.json` file, and running `makko .` writes the finished site into an output folder that any HTML host can serve. The [English documentation](https://makko.starlightnet.work/english.html) describes the setup and the feeds it writes, and the project is maintained by The Starlight Network on its own Forgejo instance.

## Worth knowing

The documentation says Makko is designed primarily for blogs and does not support fully custom templates beyond the post and feed templates. It also says the built-in server is not meant for production, so the site goes to a separate host.
