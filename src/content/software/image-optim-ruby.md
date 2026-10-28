---
id: image-optim-ruby
name: image_optim
urls:
  repository: https://github.com/toy/image_optim
  docs: https://rubydoc.info/gems/image_optim/frames
category:
  - build-tool
  - media
description: Ruby command line tool and library that optimizes JPEG, PNG, GIF and SVG images by running external compression utilities.
status: active
maintainer: Ivan Kuchin
maintainerType: individual
firstRelease: 2012
language: ruby
runtime:
  - ruby
runtimeMin: ruby 1.9
runsAs:
  - local
installMethod: gem install
licenseModel: open-source
license: MIT
currentMajor: "0"
latestReleaseDate: 2026-05-27
githubStargazers: 1548
contributors: 32
dependentRepos: 1632
dependentPackages: 43
addedAt: 2026-10-28
checkedAt: 2026-10-28
sources:
  - field: urls
    url: https://api.github.com/repos/toy/image_optim
    checkedAt: 2026-10-28
  - field: urls
    url: https://github.com/toy/image_optim/blob/v0.32.0/README.markdown
    checkedAt: 2026-10-28
  - field: maintainer
    url: https://github.com/toy/image_optim/blob/v0.32.0/LICENSE.txt
    checkedAt: 2026-10-28
  - field: language
    url: https://api.github.com/repos/toy/image_optim
    checkedAt: 2026-10-28
  - field: category
    url: https://github.com/toy/image_optim/blob/v0.32.0/README.markdown
    checkedAt: 2026-10-28
  - field: runtime
    url: https://github.com/toy/image_optim/blob/v0.32.0/image_optim.gemspec
    checkedAt: 2026-10-28
  - field: runtimeMin
    url: https://github.com/toy/image_optim/blob/v0.32.0/image_optim.gemspec
    checkedAt: 2026-10-28
  - field: runsAs
    url: https://github.com/toy/image_optim/blob/v0.32.0/README.markdown
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/toy/image_optim/blob/v0.32.0/README.markdown
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/toy/image_optim/blob/v0.32.0/README.markdown
    checkedAt: 2026-10-28
  - field: installMethod
    url: https://github.com/toy/image_optim/blob/v0.32.0/README.markdown
    checkedAt: 2026-10-28
  - field: license
    url: https://github.com/toy/image_optim/blob/v0.32.0/image_optim.gemspec
    checkedAt: 2026-10-28
  - field: license
    url: https://rubygems.org/api/v1/gems/image_optim.json
    checkedAt: 2026-10-28
  - field: licenseModel
    url: https://github.com/toy/image_optim/blob/v0.32.0/LICENSE.txt
    checkedAt: 2026-10-28
  - field: firstRelease
    url: https://rubygems.org/api/v1/versions/image_optim.json
    checkedAt: 2026-10-28
  - field: currentMajor
    url: https://rubygems.org/api/v1/gems/image_optim.json
    checkedAt: 2026-10-28
  - field: latestReleaseDate
    url: https://rubygems.org/api/v1/gems/image_optim.json
    checkedAt: 2026-10-28
  - field: githubStargazers
    url: https://api.github.com/repos/toy/image_optim
    checkedAt: 2026-10-28
  - field: contributors
    url: https://api.github.com/repos/toy/image_optim/contributors
    checkedAt: 2026-10-28
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/image_optim
    checkedAt: 2026-10-28
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/rubygems.org/packages/image_optim
    checkedAt: 2026-10-28
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
npmWeeklyDownloads: null
---

image_optim is a Ruby command line tool and library for optimizing JPEG, PNG, GIF and SVG images. It does the work through external utilities such as optipng, pngquant, jpegoptim, oxipng and svgo, so the gem drives those programs rather than compressing images itself. It runs from the shell, as `image_optim` with file names or a directory, or from Ruby code, on a developer's machine or in CI.

The gem installs with `gem install image_optim` or a Gemfile entry. The README says it is based on ImageOptim.app, the macOS application, which the gem does not extend.

## Worth knowing

The utilities are separate installs that the gem does not carry. A container or CI job that runs the tool needs them present in addition to the gem.
