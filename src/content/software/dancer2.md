---
id: dancer2
name: Dancer2
urls:
  home: https://perldancer.org/
  repository: https://github.com/PerlDancer/Dancer2
  docs: https://metacpan.org/pod/Dancer2%3A%3AManual
  plugins: https://metacpan.org/pod/Dancer2%3A%3APlugins
category:
  - framework
description: Lightweight web application framework written in Perl, built on Moo and running on PSGI.
status: active
maintainer: Dancer Core Developers
maintainerType: community
firstRelease: 2013
language: perl
templating: template-tiny, template-toolkit
runsAs:
  - always-on
  - per-request
installMethod: cpanm
licenseModel: open-source
license: perl_5
currentMajor: "2"
latestReleaseDate: 2026-09-28
githubStargazers: 604
contributors: 144
social:
  forum: https://github.com/PerlDancer/Dancer2/discussions
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://perldancer.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/PerlDancer/Dancer2
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/PerlDancer/Dancer2/blob/main/README.md
    checkedAt: 2026-10-26
  - field: urls
    url: https://github.com/PerlDancer/Dancer2/blob/main/README.md
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://github.com/PerlDancer/Dancer2/blob/main/README.md
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/PerlDancer/Dancer2
    checkedAt: 2026-10-26
  - field: category
    url: https://github.com/PerlDancer/Dancer2/blob/main/README.md
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/PerlDancer/Dancer2/main/lib/Dancer2/Manual/Tutorial.pod
    checkedAt: 2026-10-26
  - field: templating
    url: https://raw.githubusercontent.com/PerlDancer/Dancer2/main/lib/Dancer2/Manual/Tutorial.pod
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/PerlDancer/Dancer2/main/lib/Dancer2/Manual/Deployment.pod
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://raw.githubusercontent.com/PerlDancer/Dancer2/main/lib/Dancer2/Manual/Deployment.pod
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://raw.githubusercontent.com/PerlDancer/Dancer2/main/lib/Dancer2/Manual/QuickStart.pod
    checkedAt: 2026-10-26
  - field: license
    url: https://fastapi.metacpan.org/v1/release/Dancer2
    checkedAt: 2026-10-26
  - field: license
    url: https://github.com/PerlDancer/Dancer2/blob/main/README.md
    checkedAt: 2026-10-26
  - field: licenseModel
    url: https://github.com/PerlDancer/Dancer2/blob/main/README.md
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://fastapi.metacpan.org/v1/release/_search?q=distribution:Dancer2&size=1&sort=date:asc
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://fastapi.metacpan.org/v1/release/Dancer2
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://fastapi.metacpan.org/v1/release/Dancer2
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/PerlDancer/Dancer2
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/PerlDancer/Dancer2/contributors
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Dancer2 is a Perl web application framework that the project describes as the evolution of Dancer. The README says it is based on Moo, a lightweight object framework for Perl.

Dancer2 is installed from CPAN with cpanm. For production the deployment section of the manual says to use a PSGI-compatible web server such as the pre-forking Starman, and it also covers CGI and FastCGI under Apache. New applications use Dancer2::Template::Tiny for templates, and the tutorial shows how to switch to Template Toolkit. The project keeps a curated list of recommended plugins on MetaCPAN.

## Worth knowing

The project site at perldancer.org describes the framework under the name Dancer, and its examples use Dancer2.
