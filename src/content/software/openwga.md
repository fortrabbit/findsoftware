---
id: openwga
name: OpenWGA
urls:
  home: https://www.openwga.com/
  repository: https://github.com/Innovationgate/OpenWGA
category:
  - cms
description: Open source Java CMS platform developed by Innovation Gate, distributed as a web application archive and a Debian package.
status: active
maintainer: Innovation Gate GmbH
maintainerType: company
firstRelease: 2016
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
  - sqlserver
  - postgres
runsAs:
  - always-on
installMethod: Gradle build producing a WAR or Debian package
licenseModel: open-source
license: GPL-3.0-or-later, GPL-3.0 with OpenWGA plugin exception, GPL-2.0 with OpenWGA plugin exception
currentMajor: "7"
latestReleaseDate: 2026-10-26
githubStargazers: 2
contributors: 1
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.openwga.com/
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/Innovationgate/OpenWGA
    checkedAt: 2026-10-26
  - field: description
    url: https://www.openwga.com/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.openwga.com/inprint.13.de.html
    checkedAt: 2026-10-26
  - field: maintainerType
    url: https://www.openwga.com/inprint.13.de.html
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.openwga.com/inprint.13.de.html
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/Innovationgate/OpenWGA
    checkedAt: 2026-10-26
  - field: category
    url: https://www.openwga.com/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/Innovationgate/OpenWGA/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/Innovationgate/OpenWGA/blob/master/README.md
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://github.com/Innovationgate/OpenWGA/blob/master/README.md
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://github.com/Innovationgate/OpenWGA/blob/master/OpenWGA/libraries/wgapiJdbc/src/main/java/de/innovationgate/webgate/api/jdbc/modules/dbs/mysqlcs.properties
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/Innovationgate/OpenWGA/blob/master/OpenWGA/libraries/wgapiJdbc/src/main/java/de/innovationgate/webgate/api/jdbc/modules/dbs/mysqlcs.properties
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/Innovationgate/OpenWGA/blob/master/OpenWGA/libraries/wgapiJdbc/src/main/java/de/innovationgate/webgate/api/jdbc/modules/dbs/mssqlcs.properties
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/Innovationgate/OpenWGA/blob/master/OpenWGA/libraries/wgapiJdbc/src/main/java/de/innovationgate/webgate/api/jdbc/modules/dbs/postgresqlcs.properties
    checkedAt: 2026-10-26
  - field: databases
    url: https://github.com/Innovationgate/OpenWGA/blob/master/OpenWGA/libraries/wgapiJdbc/src/main/java/de/innovationgate/webgate/api/jdbc/modules/dbs/hsqlcs.properties
    checkedAt: 2026-10-26
  - field: license
    url: https://www.openwga.com/
    checkedAt: 2026-10-26
  - field: license
    url: https://www.openwga.com/
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/Innovationgate/OpenWGA/blob/master/OpenWGA/distros/wgaDeb/build.gradle
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://www.openwga.com/
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://api.github.com/repos/Innovationgate/OpenWGA/releases
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://api.github.com/repos/Innovationgate/OpenWGA/releases
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/Innovationgate/OpenWGA/releases
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/Innovationgate/OpenWGA
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/Innovationgate/OpenWGA/contributors?per_page=1
    checkedAt: 2026-10-26
  - field: runtime
    url: https://github.com/Innovationgate/OpenWGA/blob/master/README.md
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://github.com/Innovationgate/OpenWGA/blob/master/OpenWGA/distros/wgaDeb/dist/all/openwga/src/etc/init.d/openwga
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

OpenWGA is a Java content management platform developed by Innovation Gate GmbH in Germany. The source is on GitHub and is built with Gradle into a JavaEE web application archive or a Debian package, whose init script starts a bundled Tomcat as a service. Its content store modules cover MySQL, Microsoft SQL Server, PostgreSQL and HSQLDB, so the platform keeps its content in a relational database.

The Community Edition is distributed under the GNU General Public License version 3 or later, with an exception that lets plugins under other licenses be distributed alongside it.

## Worth knowing

The repository has no LICENSE file at its root, so the GPL text is taken from the Debian packaging tree and the license statement from the homepage. The Debian build file states GPL 2.0 with the same plugin exception, so the statements differ. The Debian packaging also names an old Java release, and no current page states a minimum runtime.
