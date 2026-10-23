---
id: github-blog
name: Github Blog
urls:
  repository: https://github.com/renatorib/github-blog
  docs: https://github.com/renatorib/github-blog/tree/master/docs
category:
  - cms
description: TypeScript API library that reads blog posts, comments and labels from the issues of a GitHub repository.
status: active
maintainer: Renato Ribeiro
maintainerType: individual
firstRelease: 2021
language: javascript
installMethod: npm install @rena.to/github-blog
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2025-03-21
githubStargazers: 409
npmWeeklyDownloads: 4
contributors: 2
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: name
    url: https://github.com/renatorib/github-blog/blob/master/README.md
    checkedAt: 2026-10-23
  - field: urls
    url: https://api.github.com/repos/renatorib/github-blog
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/renatorib/github-blog/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/renatorib/github-blog/master/LICENSE
    checkedAt: 2026-10-23
  - field: language
    url: https://api.github.com/repos/renatorib/github-blog
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/renatorib/github-blog/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/renatorib/github-blog/blob/master/README.md
    checkedAt: 2026-10-23
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/point/last-week/@rena.to/github-blog
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/renatorib/github-blog
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/renatorib/github-blog/master/LICENSE
    checkedAt: 2026-10-23
  - field: firstRelease
    url: https://registry.npmjs.org/@rena.to%2fgithub-blog
    checkedAt: 2026-10-23
  - field: currentMajor
    url: https://registry.npmjs.org/@rena.to%2fgithub-blog
    checkedAt: 2026-10-23
  - field: latestReleaseDate
    url: https://registry.npmjs.org/@rena.to%2fgithub-blog
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/renatorib/github-blog
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/renatorib/github-blog/contributors
    checkedAt: 2026-10-23
figure:
  emoji: 📝
  color: "#cdb4db"
  textColor: "#1a1a1a"
  text: JavaScript / TypeScript · CMS
ai: authored
packagistDownloads: null
---

Github Blog is a TypeScript library that reads blog posts from the issues of a GitHub repository. Each issue is one post, and labels with a key and a value, such as type, state, tag and slug, classify it. The library is installed from npm and created with a repository name and a GitHub token. It provides methods for fetching posts and comments, with search, sorting and cursor pagination. The README says the repository covers only the API, and Renato Ribeiro holds the copyright.

## Worth knowing

Posts are read through the GitHub API, so the repository and a token are required. The README notes that random people can open issues on a public repository but cannot add labels, so a label such as type:post controls which issues appear, and that the library fetches only open issues.
