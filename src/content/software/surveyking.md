---
id: surveyking
name: SurveyKing
urls:
  home: https://surveyking.cn
  repository: https://github.com/javahuang/SurveyKing
  docs: https://surveyking.cn/help/quickstart/
category:
  - forms
description: Self-hosted survey, exam and question-bank platform, with an MIT-licensed open-source edition and a commercial enterprise edition.
status: stub
maintainer: SurveyKing
maintainerType: individual
firstRelease: 2021
language: java
databases:
  - mysql
adminUi: true
i18n: yes, eight interface languages
runsAs:
  - always-on
installMethod: docker run, with the built-in H2 database
licenseModel: open-core
license: MIT
latestReleaseDate: 2021-10-27
githubStargazers: 4034
contributors: 10
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: status
    url: https://api.github.com/repos/javahuang/SurveyKing/releases
    checkedAt: 2026-11-03
  - field: urls
    url: https://surveyking.cn/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/javahuang/SurveyKing
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/javahuang/SurveyKing/blob/main/LICENSE
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/javahuang/SurveyKing
    checkedAt: 2026-11-03
  - field: category
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://surveyking.cn/open-source/deploy/
    checkedAt: 2026-11-03
  - field: adminUi
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: databases
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: i18n
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: license
    url: https://api.github.com/repos/javahuang/SurveyKing
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://github.com/javahuang/SurveyKing/blob/main/README.md
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://api.github.com/repos/javahuang/SurveyKing/tags
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://api.github.com/repos/javahuang/SurveyKing/releases
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/javahuang/SurveyKing
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/javahuang/SurveyKing/contributors
    checkedAt: 2026-11-03
ai: authored
contentStore: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

SurveyKing is a self-hosted platform for surveys, exams and question-bank practice. Its open-source edition is a Java application that runs from a Docker image or a Windows package, and the deployment guide recommends Docker Compose for long-running use, and it starts with a built-in H2 database; an external MySQL database is the documented alternative. Administrators manage users and roles with role-based access control, and sign-in can use Google OAuth or WeChat.

The interface can be switched between eight languages.

## Worth knowing

A commercial edition, SurveyKing Pro, is sold under a commercial license with official delivery services.
