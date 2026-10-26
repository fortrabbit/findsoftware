---
id: oracle-apex
name: Oracle APEX
urls:
  home: https://www.oracle.com/apex/
  repository: https://github.com/oracle/apex
  docs: https://docs.oracle.com/en/database/oracle/apex/26.2/index.html
category:
  - admin-panel
description: Low-code platform from Oracle for building and deploying data-driven web applications inside an Oracle Database.
status: active
maintainer: Oracle Corporation
maintainerType: company
hqCountry: US
contentStore:
  - database
databases:
  - oracle
runsAs:
  - always-on
installMethod: SQL install scripts into an Oracle Database, with Oracle REST Data Services (ORDS) as the web server
githubStargazers: 661
contributors: 8
social:
  forum: https://forums.oracle.com/ords/apexds/domain/dev-community/category/apex
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://www.oracle.com/apex/
    checkedAt: 2026-10-26
  - field: urls
    url: https://docs.oracle.com/en/database/oracle/apex/26.2/index.html
    checkedAt: 2026-10-26
  - field: category
    url: https://docs.oracle.com/en/database/oracle/apex/index.html
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/oracle/apex
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://www.oracle.com/legal/copyright.html
    checkedAt: 2026-10-26
  - field: hqCountry
    url: https://www.oracle.com/legal/copyright.html
    checkedAt: 2026-10-26
  - field: databases
    url: https://docs.oracle.com/en/database/oracle/apex/26.2/htmig/apex-installation-requirements.html
    checkedAt: 2026-10-26
  - field: contentStore
    url: https://docs.oracle.com/en/database/oracle/apex/26.2/htmig/about-apex-architecture.html
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://docs.oracle.com/en/database/oracle/apex/26.2/htmig/toc.htm
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/oracle/apex
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/oracle/apex/contributors
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://docs.oracle.com/en/database/oracle/apex/26.2/htmig/about-apex-architecture.html
    checkedAt: 2026-10-26
ai: authored
---

Oracle APEX is a low-code platform for building and deploying data-driven web applications. Applications are generated from metadata stored in an Oracle Database, and the platform runs inside that database. Oracle REST Data Services, a Java-based web server, sits in front of it and maps browser requests to the APEX engine in the database. Developers and end users reach the same installation through a browser, with no client software to install.

## Worth knowing

A self-managed installation needs an Oracle Database release that the install requirements name, plus Oracle REST Data Services at the version the same page lists. The product page says APEX is included at no additional cost with supported editions of the Oracle Database, and the architecture page notes that Oracle WebLogic Server, if used as the web server, carries licensing costs.
