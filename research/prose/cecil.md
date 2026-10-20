Cecil is a PHP command-line tool that merges Markdown pages, media and Twig templates into a static website. Content is stored as flat Markdown files with front matter, and the generator produces pagination, taxonomies, a sitemap, RSS feeds, robots.txt and redirects. Responsive images are converted to WebP and AVIF during the build. The first functional version was released in September 2013 under the name PHPoole.

Cecil runs as a PHAR file, as a standalone binary that embeds PHP, or as a Composer global install. The `serve` command uses PHP's built-in web server, which the standalone binary does not include. Without PHP, the site is built with the build command and served by another web server.

The [continuous deployment guide](https://cecil.app/documentation/deploy/continuous-deployment/) and the [static hosting guide](https://cecil.app/documentation/deploy/static-hosting/) describe two routes: uploading the built output to any static hosting service, or letting a CI service build the site on each change to a repository. The guide names GitHub Pages and GitLab CI as examples.

## Worth knowing

The standalone binaries are unsigned, so macOS users remove the quarantine attribute before the first run. The binary uses GD for image processing and has no self-update command, so a new version is installed by downloading the binary again.
