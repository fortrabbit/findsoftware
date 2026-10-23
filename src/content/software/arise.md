---
id: arise
name: Arise
urls:
  home: https://ari.se.net
  repository: https://github.com/spectrasecure/arise
  docs: https://github.com/spectrasecure/arise/blob/main/docs/guides/getting-started/README.md
category:
  - ssg
description: Static site generator written in Bash that builds Markdown pages with pandoc for deployment from a Git repository to a cloud static host.
status: active
maintainer: Spectra Secure
firstRelease: 2023
hosting:
  - static
contentStore:
  - flat-file
runsAs:
  - static
renderingModes:
  - static
installMethod: fork the repository and point a cloud web host at it
licenseModel: open-source
license: AGPL-3.0, MIT, CC-BY-SA-4.0
currentMajor: "1"
latestReleaseDate: 2023-11-17
githubStargazers: 57
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://ari.se.net/
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/spectrasecure/arise
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/spectrasecure/arise/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/spectrasecure/arise/main/LICENSE/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/spectrasecure/arise/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/spectrasecure/arise/blob/main/docs/guides/getting-started/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/spectrasecure/arise/blob/main/docs/guides/getting-started/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/spectrasecure/arise/blob/main/docs/guides/getting-started/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/spectrasecure/arise/blob/main/docs/guides/creating-arise-pages/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/spectrasecure/arise/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/spectrasecure/arise/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://github.com/spectrasecure/arise/blob/main/README.md
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/spectrasecure/arise/main/LICENSE/README.md
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/spectrasecure/arise/releases
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/spectrasecure/arise/releases
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/spectrasecure/arise/releases
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/spectrasecure/arise
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/spectrasecure/arise/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

Arise is a static site generator written in Bash, maintained by Spectra Secure. A site is a set of page folders in a Git repository. A GitHub Actions workflow builds the site and writes the output to an html branch, and a cloud static host serves that branch. Pages are written in Markdown and converted with pandoc.

The build needs pandoc and the GNU versions of date, find and awk, so the machine that builds the site needs them installed.

## Worth knowing

The code is licensed under AGPL-3.0. The example site is MIT and the logo is CC-BY-SA-4.0, so a site built from the example carries its own terms.
