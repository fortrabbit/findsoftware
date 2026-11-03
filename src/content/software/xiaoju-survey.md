---
id: xiaoju-survey
name: XIAOJUSURVEY
urls:
  home: https://xiaojusurvey.didi.cn
  repository: https://github.com/didi/xiaoju-survey
  docs: https://xiaojusurvey.didi.cn/docs/next/document/%E6%A6%82%E8%BF%B0/%E7%AE%80%E4%BB%8B
category:
  - forms
description: Open source survey and form builder for questionnaires, exams and polls, with an embeddable survey SDK.
status: active
maintainer: Beijing Didi Infinity Technology and Development Co.,Ltd.
maintainerType: company
firstRelease: 2023
language: javascript
runtime:
  - node
hosting:
  - node
databases:
  - mongodb
adminUi: true
runsAs:
  - always-on
installMethod: docker image xiaojusurvey/xiaoju-survey (slim and full)
licenseModel: open-source
license: Apache-2.0
currentMajor: "1"
latestReleaseDate: 2024-03-07
githubStargazers: 3801
contributors: 28
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: urls
    url: https://xiaojusurvey.didi.cn/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/didi/xiaoju-survey
    checkedAt: 2026-11-03
  - field: urls
    url: https://xiaojusurvey.didi.cn/docs/next/document/%E6%A6%82%E8%BF%B0/%E7%AE%80%E4%BB%8B
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://raw.githubusercontent.com/didi/xiaoju-survey/main/LICENSE
    checkedAt: 2026-11-03
  - field: maintainerType
    url: https://raw.githubusercontent.com/didi/xiaoju-survey/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/didi/xiaoju-survey
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/didi/xiaoju-survey/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runtime
    url: https://xiaojusurvey.didi.cn/docs/next/document/%E6%A6%82%E8%BF%B0/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B
    checkedAt: 2026-11-03
  - field: databases
    url: https://xiaojusurvey.didi.cn/docs/next/document/%E6%A6%82%E8%BF%B0/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/didi/xiaoju-survey/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/didi/xiaoju-survey/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/didi/xiaoju-survey/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://xiaojusurvey.didi.cn/docs/next/document/%E5%B7%A5%E7%A8%8B%E9%83%A8%E7%BD%B2/Docker%E9%83%A8%E7%BD%B2
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://xiaojusurvey.didi.cn/docs/next/document/%E5%B7%A5%E7%A8%8B%E9%83%A8%E7%BD%B2/%E6%9C%8D%E5%8A%A1%E9%83%A8%E7%BD%B2
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://xiaojusurvey.didi.cn/docs/next/document/%E5%B7%A5%E7%A8%8B%E9%83%A8%E7%BD%B2/%E6%9C%8D%E5%8A%A1%E9%83%A8%E7%BD%B2
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/didi/xiaoju-survey
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://raw.githubusercontent.com/didi/xiaoju-survey/main/LICENSE
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://api.github.com/repos/didi/xiaoju-survey/git/refs/tags/v1.2.0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/didi/xiaoju-survey/commits/v1.2.0
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/didi/xiaoju-survey/commits/v1.0.0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/didi/xiaoju-survey
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/didi/xiaoju-survey/contributors?per_page=1
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

XIAOJUSURVEY is an open source system for building questionnaires, exams, polls and forms. It has a management console for the surveys and an embeddable survey SDK for web pages, apps and mini programs. The console is a Vue 3 web app and the server is NestJS on MongoDB, as the README says. The system runs from a Docker image, or from source on a server with the web app behind nginx, as the [service deployment guide](https://xiaojusurvey.didi.cn/docs/next/document/%E5%B7%A5%E7%A8%8B%E9%83%A8%E7%BD%B2/%E6%9C%8D%E5%8A%A1%E9%83%A8%E7%BD%B2) describes.

Surveys are built in the console and published through distribution channels, which the [multi-end SDK API](https://xiaojusurvey.didi.cn/docs/next/api/%E5%A4%9A%E7%AB%AFSDK%20API) lists for apps, web pages and mini programs. Responses can be analyzed and exported in the console, and a server API creates and manages the surveys and their channels.

## Worth knowing

The README describes AI-generated surveys, custom hooks that push data and messages to other systems, and multi-role permission management.
