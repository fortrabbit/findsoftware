---
id: mssql
name: Microsoft SQL Server
urls:
  home: https://www.microsoft.com/en-us/sql-server
  docs: https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server
category:
  - database
description: Proprietary relational database management system from Microsoft, with Express, Standard and Enterprise editions.
status: active
maintainer: Microsoft Corporation
maintainerType: company
hqCountry: US
runsAs:
  - always-on
installMethod: windows-setup
license: Microsoft SQL Server License Terms
currentMajor: "17"
latestReleaseDate: 2026-10-22
addedAt: 2026-10-30
checkedAt: 2026-10-30
sources:
  - field: name
    url: https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server
    checkedAt: 2026-10-30
  - field: urls
    url: https://www.microsoft.com/en-us/sql-server
    checkedAt: 2026-10-30
  - field: urls
    url: https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server
    checkedAt: 2026-10-30
  - field: maintainer
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-30
  - field: maintainerType
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-30
  - field: hqCountry
    url: https://www.microsoft.com/en-us/legal/terms-of-use
    checkedAt: 2026-10-30
  - field: category
    url: https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server
    checkedAt: 2026-10-30
  - field: license
    url: https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server
    checkedAt: 2026-10-30
  - field: currentMajor
    url: https://learn.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2025
    checkedAt: 2026-10-30
  - field: latestReleaseDate
    url: https://support.microsoft.com/en-us/servicing/sql/sql-server-2025/kb5005684-build-versions
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-setup
    checkedAt: 2026-10-30
  - field: installMethod
    url: https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server
    checkedAt: 2026-10-30
  - field: runsAs
    url: https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-setup
    checkedAt: 2026-10-30
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

Microsoft SQL Server is Microsoft's database server, and applications connect to it with Transact-SQL. It installs on Windows or Linux, or runs in a Linux container. The Database Engine it contains is also used by Azure SQL Database and Azure SQL Managed Instance, as the [overview](https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server) lists them.

Express, Standard and Enterprise are among its editions, and Express is the free one. The [editions page](https://learn.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2025) lists which features each edition includes.

## Worth knowing

The software is licensed under Microsoft's license terms rather than an open source license. On Linux the service is started by the operating system's service manager, so it runs as an always-on process.
