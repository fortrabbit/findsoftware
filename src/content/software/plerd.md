---
id: plerd
name: Plerd
urls:
  home: https://jmac.org/plerd/
  repository: https://github.com/jmacdotorg/plerd
  docs: https://github.com/jmacdotorg/plerd/blob/master/README.md
category:
  - cms
description: Ultralight Markdown blogging platform that generates a static website from a folder of Markdown files.
status: active
maintainer: Jason McIntosh
maintainerType: individual
firstRelease: 2015
hosting:
  - static
contentStore:
  - flat-file
adminUi: false
templating: template toolkit
runsAs:
  - static
renderingModes:
  - static
installMethod: cpanm
licenseModel: open-source
license: MIT
currentMajor: "2"
latestReleaseDate: 2026-07-25
githubStargazers: 117
contributors: 8
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://jmac.org/plerd/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/jmacdotorg/plerd
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/jmacdotorg/plerd/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://jmac.org/plerd/
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/jmacdotorg/plerd/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/jmacdotorg/plerd/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://github.com/jmacdotorg/plerd/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/jmacdotorg/plerd/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/jmacdotorg/plerd/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://jmac.org/plerd/
    checkedAt: 2026-10-23
  - field: adminUi
    url: https://jmac.org/plerd/
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/jmacdotorg/plerd
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://jmac.org/plerd/
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/jmacdotorg/plerd/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/jmacdotorg/plerd/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/jmacdotorg/plerd/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/jmacdotorg/plerd
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/jmacdotorg/plerd/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: CMS
ai: authored
---

Plerd is a blogging platform that builds a static website from a folder of Markdown files, using Template Toolkit templates for its pages. The `plerdall` program builds the whole site on demand, and `plerdwatcher` is a daemon that monitors the source folder and republishes whatever changed.

There is no database and no admin interface. Posts are Markdown files in the source folder. The software is written in Perl, needs Perl 5.26 or later, and installs from CPAN with `cpanm`.

## Worth knowing

The [README](https://github.com/jmacdotorg/plerd/blob/master/README.md) says the source folder typically lives on the web server and is synced from a laptop with Dropbox, rclone or similar, so `plerdwatcher` runs where the folder is. Plerd serves nothing itself: a separate web server serves the generated files.
