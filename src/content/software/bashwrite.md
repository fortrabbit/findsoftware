---
id: bashwrite
name: BashWrite
urls:
  home: https://raycc51.github.io/BashWrite/
  repository: https://github.com/RayCC51/BashWrite
  docs: https://github.com/RayCC51/BashWrite/blob/main/README.md
category:
  - cms
description: Single bash script that builds a blog from Markdown files in a directory.
status: active
maintainer: RayCC
maintainerType: individual
firstRelease: 2025
contentStore:
  - flat-file
installMethod: download script
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2025-04-29
githubStargazers: 6
contributors: 1
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://github.com/RayCC51/BashWrite/blob/main/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/RayCC51/BashWrite
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/RayCC51/BashWrite/blob/main/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://github.com/RayCC51/BashWrite/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: maintainerType
    url: https://api.github.com/repos/RayCC51/BashWrite
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/RayCC51/BashWrite/blob/main/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/RayCC51/BashWrite/blob/main/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/RayCC51/BashWrite/blob/main/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/RayCC51/BashWrite
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/RayCC51/BashWrite/blob/main/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://api.github.com/repos/RayCC51/BashWrite/releases?per_page=100
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://api.github.com/repos/RayCC51/BashWrite/releases?per_page=100
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://api.github.com/repos/RayCC51/BashWrite/releases?per_page=100
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/RayCC51/BashWrite
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/RayCC51/BashWrite/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: CMS
ai: authored
---

BashWrite is a single bash script that builds a blog from Markdown files. Posts are written in a `write` folder with frontmatter for the title, description, date, tags, draft status and pinning. Running `./bw.sh b` generates the blog's HTML pages, tag pages, an RSS feed and a sitemap.

The script is installed by downloading `bw.sh` from the release page and editing the settings at its top, such as the blog name, author, base URL and theme color. The [demo blog](https://raycc51.github.io/BashWrite/) is built with the same script.

## Worth knowing

The README lists "Hard to customize" as a limit and says the Markdown converter is not perfect. Its bug list is on the demo blog. The README also describes publishing the generated files to GitHub Pages from a gh-pages branch.
