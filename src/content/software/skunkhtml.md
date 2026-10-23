---
id: skunkhtml
name: SkunkHTML
urls:
  repository: https://github.com/mg0x7BE/skunk-html
  docs: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
category:
  - ssg
description: Blog generator written in F# that builds a GitHub Pages site from Markdown files in a forked repository.
status: active
maintainerType: individual
runtime:
  - dotnet
hosting:
  - static
contentStore:
  - flat-file
i18n: interface texts and site language set in Config.fs
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: fork or template on GitHub, then GitHub Pages
licenseModel: open-source
license: Unlicense
githubStargazers: 167
contributors: 2
social:
  forum: https://github.com/mg0x7BE/skunk-html/discussions
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/mg0x7BE/skunk-html
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runtime
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: contentStore
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: i18n
    url: https://github.com/mg0x7BE/skunk-html/blob/master/README.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/mg0x7BE/skunk-html
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://github.com/mg0x7BE/skunk-html/blob/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/mg0x7BE/skunk-html
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/mg0x7BE/skunk-html/contributors?per_page=1
    checkedAt: 2026-10-23
figure:
  emoji: ⚡
  color: "#a3c4f3"
  textColor: "#1a1a1a"
  text: SSG
ai: authored
---

SkunkHTML is a blog that runs on GitHub Pages. A fork of its repository holds the Markdown posts, and GitHub Actions runs an F# program that converts the posts to HTML and deploys the result to GitHub Pages.

The build uses FSharp.Formatting to convert Markdown, and its layout is based on MVP.css. The [README](https://github.com/mg0x7BE/skunk-html/blob/master/README.md) describes the content folders and the optional local build.

## Worth knowing

A local preview needs .NET. The README treats it as optional, since GitHub Actions does the build.
