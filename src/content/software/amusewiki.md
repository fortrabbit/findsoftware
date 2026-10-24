---
id: amusewiki
name: AmuseWiki
urls:
  home: https://amusewiki.org
  repository: https://github.com/melmothx/amusewiki
  docs: https://amusewiki.org/library/install
category:
  - wiki
  - cms
description: Library-oriented wiki engine written in Perl, for authoring, archiving and publishing texts with a Git backend.
status: active
maintainer: Marco Pessotto
maintainerType: individual
firstRelease: 2014
contentStore:
  - flat-file
databases:
  - mysql
  - postgres
  - sqlite
i18n: yes, interface localized
runsAs:
  - always-on
installMethod: Debian repository
license: same terms as Perl 5
currentMajor: "2"
latestReleaseDate: 2026-09-30
githubStargazers: 221
contributors: 11
addedAt: 2026-10-24
checkedAt: 2026-10-24
sources:
  - field: urls
    url: https://amusewiki.org/special/index
    checkedAt: 2026-10-24
  - field: urls
    url: https://api.github.com/repos/melmothx/amusewiki
    checkedAt: 2026-10-24
  - field: urls
    url: https://github.com/melmothx/amusewiki/blob/master/README.mdwn
    checkedAt: 2026-10-24
  - field: maintainer
    url: https://github.com/melmothx/amusewiki/blob/master/LICENSE
    checkedAt: 2026-10-24
  - field: maintainerType
    url: https://github.com/melmothx/amusewiki/blob/master/LICENSE
    checkedAt: 2026-10-24
  - field: category
    url: https://amusewiki.org/special/index
    checkedAt: 2026-10-24
  - field: databases
    url: https://amusewiki.org/library/install
    checkedAt: 2026-10-24
  - field: runsAs
    url: https://amusewiki.org/library/install
    checkedAt: 2026-10-24
  - field: contentStore
    url: https://amusewiki.org/special/index
    checkedAt: 2026-10-24
  - field: i18n
    url: https://amusewiki.org/special/index
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://amusewiki.org/library/install
    checkedAt: 2026-10-24
  - field: installMethod
    url: https://amusewiki.org/library/install
    checkedAt: 2026-10-24
  - field: license
    url: https://github.com/melmothx/amusewiki/blob/master/LICENSE
    checkedAt: 2026-10-24
  - field: firstRelease
    url: https://api.github.com/repos/melmothx/amusewiki/git/refs/tags/v_0.90
    checkedAt: 2026-10-24
  - field: currentMajor
    url: https://api.github.com/repos/melmothx/amusewiki/git/refs/tags/v_2.618
    checkedAt: 2026-10-24
  - field: latestReleaseDate
    url: https://api.github.com/repos/melmothx/amusewiki/git/refs/tags/v_2.618
    checkedAt: 2026-10-24
  - field: githubStargazers
    url: https://api.github.com/repos/melmothx/amusewiki
    checkedAt: 2026-10-24
  - field: contributors
    url: https://api.github.com/repos/melmothx/amusewiki/contributors
    checkedAt: 2026-10-24
figure:
  emoji: 📚
  color: "#f7a399"
  textColor: "#1a1a1a"
  text: Wiki
ai: authored
---

AmuseWiki is a library-oriented wiki engine written in Perl, for authoring, archiving and publishing texts. Its content lives in a Git backend, and it writes in the Text::Amuse markup, which the install page's sources describe as based on and mostly compatible with Emacs Muse. The interface is localized for a list of languages. One installation can run several sites, and the README says the engine can work as a read-only site, a moderated wiki or a fully open wiki.

The install page recommends the Debian repository, which the homepage calls unofficial, and describes a manual install from a source checkout. The manual route runs an installer script, creates a MySQL or PostgreSQL database, or uses SQLite without setup, and starts the web service and a job runner as systemd units. The page recommends nginx with FCGI as the web server.

## Worth knowing

The LICENSE file gives the terms as the same as those of the Perl 5 language system and does not name a single license, so the record keeps that wording.

The install page states that Windows is not supported, and the installer needs TeX Live, a database and the Xapian libraries.
