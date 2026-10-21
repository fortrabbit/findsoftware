---
id: empress-blog
name: empress-blog
urls:
  home: https://empress-blog.netlify.app/
  repository: https://github.com/empress/empress-blog
category:
  - cms
description: Static blog system built on Ember that is mostly compatible with Ghost and writes posts as Markdown files.
status: active
firstRelease: 2019
language: javascript
runtime:
  - node
hosting:
  - static
runtimeMin: node 20
basedOn:
  - ember
contentStore:
  - flat-file
runsAs:
  - static
renderingModes:
  - static
installMethod: npm, ember install
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2025-10-23
githubStargazers: 185
npmWeeklyDownloads: 82
addedAt: 2026-10-21
checkedAt: 2026-10-21
sources:
  - field: urls
    url: https://empress-blog.netlify.app/
    checkedAt: 2026-10-21
  - field: urls
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: category
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: basedOn
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: firstRelease
    url: https://registry.npmjs.org/empress-blog
    checkedAt: 2026-10-21
  - field: language
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: runtime
    url: https://registry.npmjs.org/empress-blog/latest
    checkedAt: 2026-10-21
  - field: runtimeMin
    url: https://registry.npmjs.org/empress-blog/latest
    checkedAt: 2026-10-21
  - field: renderingModes
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: runsAs
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: installMethod
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: contentStore
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: license
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
  - field: currentMajor
    url: https://registry.npmjs.org/empress-blog/latest
    checkedAt: 2026-10-21
  - field: latestReleaseDate
    url: https://github.com/empress/empress-blog/releases/tag/v5.0.1-empress-blog
    checkedAt: 2026-10-21
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/empress-blog
    checkedAt: 2026-10-21
  - field: githubStargazers
    url: https://github.com/empress/empress-blog
    checkedAt: 2026-10-21
figure:
  emoji: 📝
  color: "#b8e0d2"
  textColor: "#1a1a1a"
  text: JavaScript · CMS
ai: authored
packagistDownloads: null
---

empress-blog is a blog system built on EmberJS that produces a fully static site. Posts and authors are Markdown files in the project, and the Ember build turns them into HTML, so the output works with S3 or any other static site hosting, as the [README](https://github.com/empress/empress-blog) describes. The README describes the system as mostly compatible with Ghost, and its two themes are shallow forks of Ghost themes. A beta import command reads exports from Ghost, WordPress and Tumblr. The project is installed into an Ember app with `npx ember install`.

## Worth knowing

The system has no user roles. The demo blog says it is entirely static and will never have the concept of user roles, so a site with several editors works from the files, not from a login.
