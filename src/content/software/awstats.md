---
id: awstats
name: AWStats
urls:
  home: https://www.awstats.org/
  repository: https://github.com/eldy/AWStats
  docs: https://www.awstats.org/
category:
  - analytics
description: Log file analyzer that generates web server statistics from a site's access logs, run as a CGI script or from the command line.
status: discontinued
maintainer: Laurent Destailleur
maintainerType: individual
firstRelease: 2000
language: perl
runtime:
  - perl
hosting:
  - perl
runtimeMin: perl 5.00503
i18n: yes, several interface languages
runsAs:
  - per-request
  - scheduled
installMethod: tarball download
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "8"
latestReleaseDate: 2025-08-26
githubStargazers: 439
contributors: 54
social:
  x: https://www.twitter.com/awstats_project
  forum: https://sourceforge.net/p/awstats/discussion/43428/
  facebook: https://www.facebook.com/awstats.org
addedAt: 2026-11-03
checkedAt: 2026-11-03
sources:
  - field: status
    url: https://github.com/eldy/AWStats
    checkedAt: 2026-11-03
  - field: status
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: urls
    url: https://api.github.com/repos/eldy/AWStats
    checkedAt: 2026-11-03
  - field: urls
    url: https://github.com/eldy/AWStats
    checkedAt: 2026-11-03
  - field: maintainer
    url: https://github.com/eldy/AWStats
    checkedAt: 2026-11-03
  - field: firstRelease
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: category
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: language
    url: https://api.github.com/repos/eldy/AWStats
    checkedAt: 2026-11-03
  - field: runtime
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: runtimeMin
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: installMethod
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://github.com/eldy/AWStats
    checkedAt: 2026-11-03
  - field: runsAs
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: license
    url: https://github.com/eldy/AWStats
    checkedAt: 2026-11-03
  - field: licenseModel
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
  - field: currentMajor
    url: https://github.com/eldy/AWStats/releases/tag/AWSTATS_8_0
    checkedAt: 2026-11-03
  - field: latestReleaseDate
    url: https://github.com/eldy/AWStats/releases/tag/AWSTATS_8_0
    checkedAt: 2026-11-03
  - field: githubStargazers
    url: https://api.github.com/repos/eldy/AWStats
    checkedAt: 2026-11-03
  - field: contributors
    url: https://api.github.com/repos/eldy/AWStats/contributors?per_page=1
    checkedAt: 2026-11-03
  - field: i18n
    url: https://www.awstats.org/
    checkedAt: 2026-11-03
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

AWStats is a log file analyzer that reads a website's web server access logs and produces statistics such as visits, pages and hosts. It is written in Perl and runs either as a CGI program, which a web server starts for each request, or from the command line, where a scheduler can update the statistics. The distribution is a tarball of Perl scripts and modules under the GNU General Public License. The project's first version dates from 2000, and its copyright line names Laurent Destailleur.

## Worth knowing

The project states that it is deprecated and no longer actively developed, and it recommends migrating to Matomo Log Analytics. The server needs a Perl interpreter.
