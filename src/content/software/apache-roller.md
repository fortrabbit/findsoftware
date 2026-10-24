---
id: apache-roller
name: Apache Roller
urls:
  home: https://roller.apache.org
  repository: https://github.com/apache/roller
  docs: https://github.com/apache/roller/blob/master/docs/roller-install-guide.adoc
category:
  - cms
description: Java multi-user and group blog server that runs as a web application on a servlet container and a relational database.
status: active
maintainer: The Apache Software Foundation
maintainerType: foundation
firstRelease: 2007
language: java
runtime:
  - jvm
hosting:
  - java
runtimeMin: jvm 11
databases:
  - mysql
  - postgres
adminUi: true
templating: velocity
i18n: per-weblog locale and timezone
runsAs:
  - always-on
installMethod: WAR file deployed to a servlet container
licenseModel: open-source
license: Apache-2.0
currentMajor: "6"
latestReleaseDate: 2026-09-24
githubStargazers: 133
contributors: 19
social:
  x: https://twitter.com/apache_roller
  forum: https://cwiki.apache.org/confluence/display/ROLLER/Roller+Mailing+Lists
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://api.github.com/repos/apache/roller
    checkedAt: 2026-10-24
  - field: urls
    url: https://roller.apache.org
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/apache/roller/blob/master/docs/roller-install-guide.adoc
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://roller.apache.org
    checkedAt: 2026-10-24
  - field: language
    url: https://api.github.com/repos/apache/roller
    checkedAt: 2026-10-24
  - field: category
    url: https://github.com/apache/roller/blob/roller-6.1.6/docs/roller-user-guide.adoc
    checkedAt: 2026-10-24
  - field: runtime
    url: https://github.com/apache/roller/blob/master/docs/roller-install-guide.adoc
    checkedAt: 2026-10-24
  - field: runtimeMin
    url: https://github.com/apache/roller/blob/roller-6.1.6/pom.xml
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/apache/roller/blob/roller-6.1.6/docs/roller-install-guide.adoc
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/apache/roller/blob/master/README.md
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://github.com/apache/roller/blob/master/README.md
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://github.com/apache/roller/blob/master/README.md
    checkedAt: 2026-10-24
  - field: i18n
    url: https://github.com/apache/roller/blob/roller-6.1.6/docs/roller-user-guide.adoc
    checkedAt: 2026-10-24
  - field: databases
    url: https://github.com/apache/roller/blob/roller-6.1.6/docs/roller-install-guide.adoc
    checkedAt: 2026-10-24
  - field: templating
    url: https://roller.apache.org
    checkedAt: 2026-10-24
  - field: adminUi
    url: https://github.com/apache/roller/blob/roller-6.1.6/docs/roller-user-guide.adoc
    checkedAt: 2026-10-24
  - field: license
    url: https://api.github.com/repos/apache/roller
    checkedAt: 2026-10-24
  - field: licenseModel
    url: https://roller.apache.org
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://github.com/apache/roller/tree/roller_2.3
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://github.com/apache/roller/tree/roller-6.1.6
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://github.com/apache/roller/tree/roller-6.1.6
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/apache/roller
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/apache/roller/contributors
    checkedAt: 2026-10-24
figure:
  emoji: 📝
  color: "#f6bd60"
  textColor: "#1a1a1a"
  text: Java · CMS
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Apache Roller is a Java multi-user and group blog server. It runs as a web application on a servlet container, with a relational database behind it. Bloggers style their blogs with Apache Velocity templates, and group blogs assign owner, editor and drafter roles. The README names Apache Tomcat and MySQL as the usual setup, and the install guide deploys a WAR file to the servlet container. The README's Maven and Docker quick starts are for trying Roller out; its Maven quick start says not to use that technique in production.

## Worth knowing

The install guide dates from the Tomcat 7 era and still states Java 1.6 as the minimum, while the release's build targets Java 11. The install guide lists OpenID and LDAP as sign-in options.
