---
id: coleslaw
name: Coleslaw
urls:
  repository: https://github.com/coleslaw-org/coleslaw
  docs: https://github.com/coleslaw-org/coleslaw/tree/master/docs
category:
  - ssg
description: Blog generator written in Common Lisp that builds a static website from post files kept in a git repository.
status: active
maintainer: Brit Butler
hosting:
  - static
templating: closure-templates
runsAs:
  - static
  - local
renderingModes:
  - static
installMethod: ros install from the git repository with Roswell
licenseModel: open-source
license: BSD-2-Clause
githubStargazers: 583
contributors: 29
addedAt: 2026-10-23
checkedAt: 2026-10-23
sources:
  - field: urls
    url: https://api.github.com/repos/coleslaw-org/coleslaw
    checkedAt: 2026-10-23
  - field: urls
    url: https://github.com/coleslaw-org/coleslaw/blob/master/README.md
    checkedAt: 2026-10-23
  - field: maintainer
    url: https://raw.githubusercontent.com/coleslaw-org/coleslaw/master/LICENSE
    checkedAt: 2026-10-23
  - field: category
    url: https://github.com/coleslaw-org/coleslaw/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/coleslaw-org/coleslaw/blob/master/README.md
    checkedAt: 2026-10-23
  - field: installMethod
    url: https://github.com/coleslaw-org/coleslaw/blob/master/README.md
    checkedAt: 2026-10-23
  - field: renderingModes
    url: https://github.com/coleslaw-org/coleslaw/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/coleslaw-org/coleslaw/blob/master/README.md
    checkedAt: 2026-10-23
  - field: runsAs
    url: https://github.com/coleslaw-org/coleslaw/blob/master/README.md
    checkedAt: 2026-10-23
  - field: templating
    url: https://raw.githubusercontent.com/coleslaw-org/coleslaw/master/docs/hacking.md
    checkedAt: 2026-10-23
  - field: license
    url: https://api.github.com/repos/coleslaw-org/coleslaw
    checkedAt: 2026-10-23
  - field: licenseModel
    url: https://raw.githubusercontent.com/coleslaw-org/coleslaw/master/LICENSE
    checkedAt: 2026-10-23
  - field: githubStargazers
    url: https://api.github.com/repos/coleslaw-org/coleslaw
    checkedAt: 2026-10-23
  - field: contributors
    url: https://api.github.com/repos/coleslaw-org/coleslaw/contributors
    checkedAt: 2026-10-23
ai: authored
---

Coleslaw is a blog generator written in Common Lisp. It keeps posts as files in a git repository and builds a static website from them into a staging directory. The README names Roswell and Quicklisp as ways to install it and says it should run on any conforming Common Lisp implementation, with testing done mainly on SBCL and CCL. The repository is hosted under the coleslaw-org organization on GitHub, and its LICENSE names Brit Butler as the copyright holder.

## Worth knowing

The project has no release or tag, so its activity is dated by the last commit on the default branch. The deploy command moves the staging directory to a deploy directory with rsync by default, and the README lists plugins for hosting via GitHub Pages and Amazon S3.
