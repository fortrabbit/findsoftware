---
id: schnack
name: Schnack
urls:
  home: https://schnack.cool
  repository: https://github.com/schn4ck/schnack
  plugins: https://github.com/schn4ck/schnack-plugins
category:
  - community
description: Self-hosted commenting system for static websites, written in JavaScript and embedded with a script tag.
status: stub
maintainer: Gregor Aisch, Moritz Klack & g-div
firstRelease: 2017
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - sqlite
adminUi: true
runsAs:
  - always-on
installMethod: npm
license: The Lil License v1
currentMajor: "1"
latestReleaseDate: 2021-01-16
githubStargazers: 1812
npmWeeklyDownloads: 77
contributors: 11
social:
  x: https://twitter.com/schnackjs
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/schn4ck/schnack
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/schn4ck/schnack/blob/v1.1.0/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: runtime
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: category
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/schn4ck/schnack/blob/v1.1.0/LICENSE
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/schn4ck/schnack
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: databases
    url: https://schnack.cool/
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/schn4ck/schnack
    checkedAt: 2026-11-03
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-10-26:2026-11-01/schnack
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://github.com/schn4ck/schnack
    checkedAt: 2026-11-03
  - field: contributors
    url: https://github.com/schn4ck/schnack
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://registry.npmjs.org/schnack
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://registry.npmjs.org/schnack
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://github.com/schn4ck/schnack/tags
    checkedAt: 2026-11-03
ai: authored
packagistDownloads: null
---

Schnack is a commenting system for static websites, written in JavaScript. The server keeps comments in SQLite, and a page embeds a comment thread with a script tag that points at the server. Site owners approve or reject comments, or trust or block users, in a moderation interface that appears in the comment section for admins. Commenters sign in with third-party accounts through OAuth, so the site owner configures an OAuth app for each provider.

The [project site](https://schnack.cool/) describes two ways to install: cloning the repository and running it with Node.js, or building a Docker image from it. The README also gives an npm route through the `npm init schnack` command. The README calls Schnack a Disqus-like system and names Commento and Isso among projects that do almost the same thing.

## Worth knowing

Plugins for OAuth login and for notifications are separate npm packages, and the schnack-plugins repository collects them. Notifications can go to the site owner by web push, and plugins send them to other channels.
