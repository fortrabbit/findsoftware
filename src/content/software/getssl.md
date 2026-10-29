---
id: getssl
name: getssl
urls:
  repository: https://github.com/srvrco/getssl
  docs: https://github.com/srvrco/getssl/wiki
category:
  - web-server
description: Bash script that obtains and renews SSL certificates from Let's Encrypt ACME servers, copies them to remote servers and reloads services.
status: active
maintainer: serverco
firstRelease: 2016
runsAs:
  - scheduled
installMethod: manual download of the script (curl)
licenseModel: open-source
license: GPL-3.0-or-later
currentMajor: "2"
latestReleaseDate: 2026-07-14
githubStargazers: 2233
contributors: 98
addedAt: 2026-10-29
checkedAt: 2026-10-29
sources:
  - field: name
    url: https://api.github.com/repos/srvrco/getssl
    checkedAt: 2026-10-29
  - field: urls
    url: https://api.github.com/repos/srvrco/getssl
    checkedAt: 2026-10-29
  - field: urls
    url: https://raw.githubusercontent.com/srvrco/getssl/master/README.md
    checkedAt: 2026-10-29
  - field: maintainer
    url: https://api.github.com/users/srvrco
    checkedAt: 2026-10-29
  - field: firstRelease
    url: https://api.github.com/repos/srvrco/getssl/releases
    checkedAt: 2026-10-29
  - field: category
    url: https://raw.githubusercontent.com/srvrco/getssl/master/getssl
    checkedAt: 2026-10-29
  - field: license
    url: https://raw.githubusercontent.com/srvrco/getssl/master/getssl
    checkedAt: 2026-10-29
  - field: licenseModel
    url: https://raw.githubusercontent.com/srvrco/getssl/master/getssl
    checkedAt: 2026-10-29
  - field: currentMajor
    url: https://api.github.com/repos/srvrco/getssl/releases
    checkedAt: 2026-10-29
  - field: latestReleaseDate
    url: https://api.github.com/repos/srvrco/getssl/releases
    checkedAt: 2026-10-29
  - field: githubStargazers
    url: https://api.github.com/repos/srvrco/getssl
    checkedAt: 2026-10-29
  - field: contributors
    url: https://api.github.com/repos/srvrco/getssl/contributors
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/srvrco/getssl/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/srvrco/getssl/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/srvrco/getssl/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/srvrco/getssl/master/README.md
    checkedAt: 2026-10-29
  - field: installMethod
    url: https://raw.githubusercontent.com/srvrco/getssl/master/README.md
    checkedAt: 2026-10-29
  - field: runsAs
    url: https://raw.githubusercontent.com/srvrco/getssl/master/README.md
    checkedAt: 2026-10-29
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
---

getssl is a bash script that obtains SSL certificates from Let's Encrypt's ACME servers and renews them when they are due. It can run on the server that uses the certificate, on a desktop computer or on another machine, and it can copy the tokens and certificates to remote servers over ssh, sftp or ftp. After a new certificate is obtained, it can reload services such as Apache, nginx or Postfix.

The script is installed by downloading it, cloning the repository, running the Makefile from a release tarball, or installing an RPM or DEB package from a release. Arch Linux has AUR packages. The README describes running it from a daily cron job, which renews certificates when required.

## Worth knowing

The project has no website of its own. The README points to the [GitHub wiki](https://github.com/srvrco/getssl/wiki) for additional help pages.

The README says the script runs on Unix-like machines, including BSD, most Linux distributions and macOS.
