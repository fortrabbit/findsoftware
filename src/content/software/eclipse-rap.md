---
id: eclipse-rap
name: Eclipse RAP
urls:
  home: https://www.eclipse.org/rap/
  repository: https://github.com/eclipse-rap/org.eclipse.rap
  docs: https://www.eclipse.org/rap/developers-guide/
category:
  - ui-library
description: Java widget toolkit for browser-based user interfaces with an SWT API, from the Eclipse Foundation.
status: active
maintainer: Eclipse Foundation AISBL
maintainerType: foundation
firstRelease: 2007
hqCountry: BE
language: java
runtime:
  - jvm
hosting:
  - java
runsAs:
  - always-on
installMethod: Eclipse IDE target platform, or RWT as a standalone Java library copied into WEB-INF/lib
licenseModel: open-source
license: EPL-1.0
currentMajor: "4"
latestReleaseDate: 2026-09-09
githubStargazers: 30
contributors: 32
social:
  x: https://twitter.com/EclipseRAP/
  forum: https://www.eclipse.org/forums/eclipse.technology.rap
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.eclipse.org/rap/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/eclipse-rap/org.eclipse.rap
    checkedAt: 2026-10-26
  - field: urls
    url: https://www.eclipse.org/rap/developers-guide/
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.eclipse.org/legal/termsofuse.php
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.eclipse.org/org/foundation/contact.php
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/eclipse-rap/org.eclipse.rap
    checkedAt: 2026-10-26
  - field: runtime
    url: https://www.eclipse.org/rap/
    checkedAt: 2026-10-26
  - field: category
    url: https://www.eclipse.org/rap/
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://www.eclipse.org/rap/developers-guide/rwt-standalone.html
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://www.eclipse.org/rap/
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/eclipse-rap/org.eclipse.rap/blob/main/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/eclipse-rap/org.eclipse.rap/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://eclipsesource.com/blogs/2026/06/21/eclipse-rap-20th-anniversary/
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://repo1.maven.org/maven2/org/eclipse/rap/org.eclipse.rap.rwt/maven-metadata.xml
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://api.github.com/repos/eclipse-rap/org.eclipse.rap/git/tags/b66d4f456ddc45257cf5b0c31a3e4184ed79c4e6
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/eclipse-rap/org.eclipse.rap
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/eclipse-rap/org.eclipse.rap/contributors
    checkedAt: 2026-10-26
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

Eclipse RAP, the Remote Application Platform, lets a developer write a browser user interface in Java against an SWT-style API. The project's homepage says RAP works with OSGi and Java EE and runs in any servlet container, and the [developer's guide](https://www.eclipse.org/rap/developers-guide/) describes two setups: an OSGi application built against a RAP target platform in the Eclipse IDE, and RWT used as a plain Java library inside a web application's WEB-INF/lib folder.

The Eclipse Foundation AISBL makes the project available.

## Worth knowing

The default mode is compatible with Java EE. The SWT compatibility mode starts a separate UI thread for each user session, and the developer's guide says code in that thread cannot directly reach Java EE transaction or security contexts.
