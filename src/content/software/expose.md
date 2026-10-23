---
id: expose
name: Expose
urls:
  repository: https://github.com/Jack000/Expose
category:
  - ssg
description: Bash script that turns folders of images and videos into a static photoessay site.
status: stub
maintainer: Jack Qiao
maintainerType: individual
hosting:
  - static
runsAs:
  - local
  - static
renderingModes:
  - static
installMethod: download
licenseModel: open-source
license: MIT
githubStargazers: 4435
contributors: 9
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/Jack000/Expose
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/Jack000/Expose/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: category
    url: https://raw.githubusercontent.com/Jack000/Expose/master/readme.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://raw.githubusercontent.com/Jack000/Expose/master/readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/Jack000/Expose/master/readme.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://raw.githubusercontent.com/Jack000/Expose/master/readme.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://raw.githubusercontent.com/Jack000/Expose/master/readme.md
    checkedAt: 2026-10-23
  - field: license
    url: https://raw.githubusercontent.com/Jack000/Expose/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/Jack000/Expose/master/LICENSE.txt
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/Jack000/Expose
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/Jack000/Expose/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Expose is a static site generator for photo essays, written as a Bash script. It runs in the folder that holds the images and videos, reads the text for each image from a text file with the same name, and writes the result to a `_site` directory. Folders become a nested menu.

## Worth knowing

The README lists ImageMagick as a dependency, and FFmpeg for video. The templates use `{{name}}` placeholders that the README describes as a sed regex, so the metadata is limited to simple key and value pairs. The repository has no release and no tag.
