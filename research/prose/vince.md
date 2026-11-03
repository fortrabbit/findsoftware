vince is a self-hosted web analytics server: the site owner runs it on their own machine or server as an alternative to Google Analytics. It is distributed as one binary with no runtime dependency, and it can be installed with an install script, a Docker image, a Helm chart or a download from the release page. One instance serves any number of sites.

## Worth knowing

The README calls vince a drop-in replacement for Plausible Analytics. Existing Plausible tracking scripts can point at a vince instance, and the tracking script is under 1 KB.

The storage is custom, built on compressed roaring bitmaps in columnar form.
