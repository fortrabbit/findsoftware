---
id: photoswipe
name: PhotoSwipe
urls:
  home: https://photoswipe.com
  repository: https://github.com/dimsemenov/PhotoSwipe
  docs: https://photoswipe.com/getting-started/
category:
  - ui-library
  - media
description: Open-source JavaScript image gallery and lightbox.
status: active
maintainer: Dmitry Semenov
maintainerType: individual
firstRelease: 2011
language: javascript
runsAs:
  - browser
installMethod: script tag, npm
licenseModel: open-source
license: MIT
currentMajor: "5"
latestReleaseDate: 2024-05-24
githubStargazers: 25302
npmWeeklyDownloads: 839570
contributors: 70
dependentRepos: 6399
dependentPackages: 371
social:
  x: https://x.com/photoswipe
addedAt: 2026-11-16
checkedAt: 2026-11-16
sources:
  - field: urls
    url: https://photoswipe.com/
    checkedAt: 2026-11-16
  - field: urls
    url: https://api.github.com/repos/dimsemenov/PhotoSwipe
    checkedAt: 2026-11-16
  - field: urls
    url: https://photoswipe.com/
    checkedAt: 2026-11-16
  - field: maintainer
    url: https://github.com/dimsemenov/PhotoSwipe/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: firstRelease
    url: https://api.github.com/repos/dimsemenov/PhotoSwipe/tags?per_page=100
    checkedAt: 2026-11-16
  - field: category
    url: https://photoswipe.com/
    checkedAt: 2026-11-16
  - field: language
    url: https://api.github.com/repos/dimsemenov/PhotoSwipe
    checkedAt: 2026-11-16
  - field: runsAs
    url: https://photoswipe.com/getting-started/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://photoswipe.com/getting-started/
    checkedAt: 2026-11-16
  - field: installMethod
    url: https://photoswipe.com/getting-started/
    checkedAt: 2026-11-16
  - field: license
    url: https://github.com/dimsemenov/PhotoSwipe/blob/master/LICENSE
    checkedAt: 2026-11-16
  - field: currentMajor
    url: https://api.github.com/repos/dimsemenov/PhotoSwipe/releases/latest
    checkedAt: 2026-11-16
  - field: latestReleaseDate
    url: https://api.github.com/repos/dimsemenov/PhotoSwipe/releases/latest
    checkedAt: 2026-11-16
  - field: githubStargazers
    url: https://api.github.com/repos/dimsemenov/PhotoSwipe
    checkedAt: 2026-11-16
  - field: contributors
    url: https://api.github.com/repos/dimsemenov/PhotoSwipe/contributors?per_page=1
    checkedAt: 2026-11-16
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/photoswipe
    checkedAt: 2026-11-16
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/photoswipe
    checkedAt: 2026-11-16
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/photoswipe
    checkedAt: 2026-11-16
ai: authored
contentStore: null
databases: null
adminUi: null
headlessApi: null
templating: null
i18n: null
renderingModes: null
packagistDownloads: null
---

PhotoSwipe is a JavaScript image gallery and lightbox. It opens the images of a gallery on the page in a dialog, loads larger images as a visitor zooms, and handles touch gestures. The script is an ES module with no build step, and the core and the lightbox are separate files, so a page can load the core only when a visitor opens an image.

The CSS is one file with no external assets, because the icons are generated in JavaScript. The [getting started guide](https://photoswipe.com/getting-started/) covers initialization, the options and the events, and it has pages for using the library with React, Vue and Svelte.

## Worth knowing

Each image needs its width and height set in advance, and the docs say the library is not designed for very large images. A tiling plugin for very large images is marked experimental. The docs say the library works only in browsers that support ES modules, and suggest a link to the image as the fallback for other browsers.

The current major removed the history API, social sharing, the fullscreen button, captions and inline galleries from the core, and some of these are or will be plugins.
