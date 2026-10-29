---
id: fail2ban
name: Fail2Ban
urls:
  repository: https://github.com/fail2ban/fail2ban
  docs: https://fail2ban.readthedocs.io/
description: Python daemon that scans log files for repeated failed logins and bans the offending IP addresses through system firewall rules.
status: stub
maintainer: fail2ban
maintainerType: community
firstRelease: 2004
language: python
runtime:
  - python
hosting:
  - python
runsAs:
  - always-on
installMethod: linux-distribution-packages
licenseModel: open-source
license: GPL-2.0-or-later
currentMajor: "1"
latestReleaseDate: 2026-08-15
githubStargazers: 18904
contributors: 248
social:
  forum: https://lists.sourceforge.net/lists/listinfo/fail2ban-users
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: urls
    url: https://api.github.com/repos/fail2ban/fail2ban
    checkedAt: 2026-10-29
  - field: urls
    url: https://github.com/fail2ban/fail2ban/blob/master/README.md
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://api.github.com/users/fail2ban
    checkedAt: 2026-10-29
  - field: maintainerType
    url: https://github.com/fail2ban/fail2ban/blob/master/THANKS
    checkedAt: 2026-10-29
  - field: language
    url: https://api.github.com/repos/fail2ban/fail2ban
    checkedAt: 2026-10-29
  - field: runtime
    url: https://github.com/fail2ban/fail2ban/blob/master/README.md
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://github.com/fail2ban/fail2ban/blob/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/fail2ban/fail2ban/blob/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://github.com/fail2ban/fail2ban/blob/master/README.md
    checkedAt: 2026-10-29
  - field: license
    url: https://github.com/fail2ban/fail2ban/blob/master/README.md
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://github.com/fail2ban/fail2ban/blob/master/README.md
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://github.com/fail2ban/fail2ban/blob/master/ChangeLog
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://github.com/fail2ban/fail2ban/releases/tag/1.1.1
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://github.com/fail2ban/fail2ban/releases/tag/1.1.1
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/fail2ban/fail2ban
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/fail2ban/fail2ban/contributors?per_page=1
    checkedAt: 2026-10-29
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Fail2Ban is a Python daemon that scans log files, such as the sshd and Apache logs, for repeated failed logins and bans the offending IP addresses through system firewall rules. It installs from Linux distribution packages or from source with setup.py, and its README describes enabling it as an automatic service.
