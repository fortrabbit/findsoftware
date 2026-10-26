---
id: opencms
name: OpenCms
urls:
  home: https://www.opencms.org/
  repository: https://github.com/alkacon/opencms-core
  docs: https://documentation.opencms.org/
category:
  - cms
description: Java and XML website content management system from open source components.
status: active
maintainer: Alkacon Software GmbH & Co. KG
maintainerType: company
firstRelease: 2012
hqCountry: DE
language: java
runtime:
  - jvm
hosting:
  - java
contentStore:
  - database
databases:
  - mysql
  - mariadb
  - oracle
  - postgres
  - sqlserver
adminUi: true
templating: jsp
runsAs:
  - always-on
renderingModes:
  - server
  - static
installMethod: Docker image or manual WAR deployment on a servlet container
licenseModel: open-core
license: LGPL-2.1, GNU LGPL
currentMajor: "22"
latestReleaseDate: 2026-10-06
githubStargazers: 572
contributors: 45
social:
  x: https://twitter.com/opencms/
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/alkacon/opencms-core
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: description
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://www.alkacon.com/en/impressum
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.alkacon.com/en/impressum
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/alkacon/opencms-core
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: adminUi
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://www.opencms.org/en
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/alkacon/opencms-core/blob/main/assets/docs/INSTALL.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/alkacon/opencms-core/blob/main/assets/docs/INSTALL.md
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/alkacon/opencms-core
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/alkacon/opencms-core/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://repo1.maven.org/maven2/org/opencms/opencms-core/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/alkacon/opencms-core/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/alkacon/opencms-core/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/alkacon/opencms-core
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/alkacon/opencms-core/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

OpenCms is a website content management system written in Java and XML, developed by Alkacon Software GmbH & Co. KG. It runs as a Java web application on a servlet container, uses JSP for template logic, and keeps content in a database that can be MySQL, MariaDB, Oracle, PostgreSQL, MS SQL Server, DB2 or HSQLDB. Pages can be served dynamically or exported to static HTML files, and one installation can host several websites.

The [installation guide](https://github.com/alkacon/opencms-core/blob/main/assets/docs/INSTALL.md) describes a manual install of the web application archive on Tomcat, and the project also publishes a Docker image.

## Worth knowing

Alkacon sells OCEE, a commercial extension for OpenCms, which the [project homepage](https://www.opencms.org/en) describes beside the open source release.

The installation guide in the repository names Tomcat 9 only, while the README says the current Jakarta variant runs on Tomcat 10.1, Tomcat 11 or Jetty 12. The README is the newer statement, so check the Tomcat version against it before installing.
