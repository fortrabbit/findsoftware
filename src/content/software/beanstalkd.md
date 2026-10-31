---
id: beanstalkd
name: beanstalkd
urls:
  home: https://beanstalkd.github.io/
  repository: https://github.com/beanstalkd/beanstalkd
  docs: https://github.com/beanstalkd/beanstalkd/blob/master/doc/protocol.txt
category:
  - backend
description: General-purpose work queue server that one process fills with jobs and other processes take them from.
status: active
maintainer: Keith Rarick
firstRelease: 2007
language: c
runtime:
  - binary
hosting:
  - binary
runsAs:
  - always-on
installMethod: apt-get
licenseModel: open-source
license: MIT
currentMajor: "1"
latestReleaseDate: 2023-03-12
githubStargazers: 6704
contributors: 66
social:
  forum: https://groups.google.com/g/beanstalk-talk
addedAt: 2026-10-31
checkedAt: 2026-10-31
sources:
  - field: urls
    url: https://beanstalkd.github.io/
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/beanstalkd/beanstalkd/blob/master/README.md
    checkedAt: 2026-10-31
  - field: urls
    url: https://github.com/beanstalkd/beanstalkd
    checkedAt: 2026-10-31
  - field: maintainer
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: language
    url: https://github.com/beanstalkd/beanstalkd
    checkedAt: 2026-10-31
  - field: runtime
    url: https://github.com/beanstalkd/beanstalkd/blob/master/README.md
    checkedAt: 2026-10-31
  - field: category
    url: https://beanstalkd.github.io/
    checkedAt: 2026-10-31
  - field: license
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: licenseModel
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://github.com/beanstalkd/beanstalkd/blob/master/README.md
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: installMethod
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: runsAs
    url: https://beanstalkd.github.io/
    checkedAt: 2026-10-31
  - field: firstRelease
    url: https://github.com/beanstalkd/beanstalkd/tags
    checkedAt: 2026-10-31
  - field: latestReleaseDate
    url: https://beanstalkd.github.io/download.html
    checkedAt: 2026-10-31
  - field: currentMajor
    url: https://github.com/beanstalkd/beanstalkd/tags
    checkedAt: 2026-10-31
  - field: githubStargazers
    url: https://github.com/beanstalkd/beanstalkd
    checkedAt: 2026-10-31
  - field: contributors
    url: https://github.com/beanstalkd/beanstalkd
    checkedAt: 2026-10-31
ai: authored
packagistDownloads: null
npmWeeklyDownloads: null
---

beanstalkd is a work queue server written in C. A producer puts a job into the queue, and a worker reserves it, runs it and deletes it, so time-consuming tasks can run outside the request that created them. The project's own description says it was originally designed to reduce the latency of page views in high-volume web applications. The server has no configuration file and takes only a handful of command-line options, and it starts listening on the address and port given on the command line.

## Worth knowing

beanstalkd is a long-running process that listens for connections, so it belongs on a host that keeps services running. The [download page](https://beanstalkd.github.io/download.html) lists the packages that ship it, and the project's own [repository](https://github.com/beanstalkd/beanstalkd) holds the files for running it as a background service.
