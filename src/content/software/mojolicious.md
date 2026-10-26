---
id: mojolicious
name: Mojolicious
urls:
  home: https://mojolicious.org
  repository: https://github.com/mojolicious/mojo
  docs: https://docs.mojolicious.org
category:
  - framework
description: Perl real-time web framework for building web applications, with a built-in web server and a toolkit for HTTP and WebSocket clients and servers.
status: active
maintainer: Sebastian Riedel
firstRelease: 2010
language: perl
templating: perl-ish templates
runsAs:
  - always-on
  - per-request
renderingModes:
  - server
installMethod: cpanm, the CPAN client
licenseModel: open-source
license: Artistic-2.0, The Artistic License 2.0
currentMajor: "9"
latestReleaseDate: 2026-10-24
githubStargazers: 2756
contributors: 153
social:
  mastodon: https://fosstodon.org/@mojolicious
  forum: https://forum.mojolicious.org
addedAt: 2026-10-26
checkedAt: 2026-10-26
sources:
  - field: urls
    url: https://mojolicious.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://mojolicious.org/
    checkedAt: 2026-10-26
  - field: urls
    url: https://api.github.com/repos/mojolicious/mojo
    checkedAt: 2026-10-26
  - field: maintainer
    url: https://mojolicious.org/
    checkedAt: 2026-10-26
  - field: language
    url: https://api.github.com/repos/mojolicious/mojo
    checkedAt: 2026-10-26
  - field: category
    url: https://mojolicious.org/
    checkedAt: 2026-10-26
  - field: renderingModes
    url: https://mojolicious.org/
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://mojolicious.org/perldoc/Mojolicious/Guides/Cookbook
    checkedAt: 2026-10-26
  - field: runsAs
    url: https://mojolicious.org/perldoc/Mojolicious/Guides/Cookbook
    checkedAt: 2026-10-26
  - field: installMethod
    url: https://mojolicious.org/
    checkedAt: 2026-10-26
  - field: templating
    url: https://mojolicious.org/
    checkedAt: 2026-10-26
  - field: license
    url: https://api.github.com/repos/mojolicious/mojo
    checkedAt: 2026-10-26
  - field: license
    url: https://raw.githubusercontent.com/mojolicious/mojo/main/LICENSE
    checkedAt: 2026-10-26
  - field: currentMajor
    url: https://fastapi.metacpan.org/v1/release/Mojolicious
    checkedAt: 2026-10-26
  - field: latestReleaseDate
    url: https://fastapi.metacpan.org/v1/release/Mojolicious
    checkedAt: 2026-10-26
  - field: firstRelease
    url: https://raw.githubusercontent.com/mojolicious/mojo/main/Changes
    checkedAt: 2026-10-26
  - field: githubStargazers
    url: https://api.github.com/repos/mojolicious/mojo
    checkedAt: 2026-10-26
  - field: contributors
    url: https://api.github.com/repos/mojolicious/mojo/contributors?per_page=1
    checkedAt: 2026-10-26
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

Mojolicious is a real-time web framework for Perl. It includes a built-in non-blocking web server, Perl-ish templates, and a toolkit with HTTP and WebSocket client and server components. It is installed from CPAN with cpanm, and the Cookbook covers running it under Hypnotoad, under Morbo during development, or as a CGI script.

## Worth knowing

On its built-in server the application is a process that stays running. As a CGI script it starts for each request and nothing stays running between them.
