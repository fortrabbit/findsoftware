---
id: wavesurfer
name: wavesurfer.js
urls:
  home: https://wavesurfer.xyz
  repository: https://github.com/katspaugh/wavesurfer.js
  docs: https://wavesurfer.xyz/docs/
category:
  - media
  - graphics
description: Open-source JavaScript library that renders interactive, customizable audio waveforms and plays audio in the browser.
status: active
maintainer: katspaugh
maintainerType: individual
firstRelease: 2013
language: javascript
runsAs:
  - browser
installMethod: npm, script tag
licenseModel: open-source
license: BSD-3-Clause, CC-BY-3.0
currentMajor: "8"
latestReleaseDate: 2026-11-12
githubStargazers: 10477
npmWeeklyDownloads: 1989497
contributors: 288
dependentRepos: 1317
dependentPackages: 177
social:
  forum: https://github.com/wavesurfer-js/wavesurfer.js/discussions/categories/q-a
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - field: urls
    url: https://wavesurfer.xyz/
    checkedAt: 2026-11-17
  - field: urls
    url: https://api.github.com/repos/katspaugh/wavesurfer.js
    checkedAt: 2026-11-17
  - field: urls
    url: https://github.com/katspaugh/wavesurfer.js/blob/main/README.md
    checkedAt: 2026-11-17
  - field: category
    url: https://github.com/katspaugh/wavesurfer.js/blob/main/README.md
    checkedAt: 2026-11-17
  - field: language
    url: https://api.github.com/repos/katspaugh/wavesurfer.js
    checkedAt: 2026-11-17
  - field: runsAs
    url: https://github.com/katspaugh/wavesurfer.js/blob/main/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/katspaugh/wavesurfer.js/blob/main/README.md
    checkedAt: 2026-11-17
  - field: installMethod
    url: https://github.com/katspaugh/wavesurfer.js/blob/main/README.md
    checkedAt: 2026-11-17
  - field: license
    url: https://api.github.com/repos/katspaugh/wavesurfer.js
    checkedAt: 2026-11-17
  - field: license
    url: https://wavesurfer.xyz/about/
    checkedAt: 2026-11-17
  - field: maintainer
    url: https://github.com/katspaugh/wavesurfer.js/blob/main/LICENSE
    checkedAt: 2026-11-17
  - field: firstRelease
    url: https://api.github.com/repos/katspaugh/wavesurfer.js/git/ref/tags/0.0.1
    checkedAt: 2026-11-17
  - field: currentMajor
    url: https://api.github.com/repos/katspaugh/wavesurfer.js/releases
    checkedAt: 2026-11-17
  - field: latestReleaseDate
    url: https://api.github.com/repos/katspaugh/wavesurfer.js/releases
    checkedAt: 2026-11-17
  - field: githubStargazers
    url: https://api.github.com/repos/katspaugh/wavesurfer.js
    checkedAt: 2026-11-17
  - field: contributors
    url: https://api.github.com/repos/katspaugh/wavesurfer.js/contributors
    checkedAt: 2026-11-17
  - field: dependentPackages
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/wavesurfer.js
    checkedAt: 2026-11-17
  - field: dependentRepos
    url: https://packages.ecosyste.ms/api/v1/registries/npmjs.org/packages/wavesurfer.js
    checkedAt: 2026-11-17
  - field: npmWeeklyDownloads
    url: https://api.npmjs.org/downloads/range/2026-11-01:2026-11-07/wavesurfer.js
    checkedAt: 2026-11-17
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

wavesurfer.js draws an interactive waveform for an audio file inside a container element and plays the audio. Its options set the colors of the waveform and its playback progress. Official plugins add regions, a timeline, a minimap, envelope controls, recording, a spectrogram and a hover readout, and the package ships TypeScript types.

The [wavesurfer.js guide](https://wavesurfer.xyz/docs/) covers common use cases, plugins and framework integration.

## Worth knowing

Audio is decoded in the browser, so long clips can fail to decode for memory reasons. The FAQ recommends pre-decoded peaks for large files, and streaming audio needs them. Audio served from another domain must send CORS headers, or the browser will not fetch it.
