DD Photos is a static photo album site generator. Each folder of photos and videos becomes an album, and the `photogen` tool resizes the images to WebP and writes the JSON index files that the site reads. The site is a SvelteKit app built ahead of time, so the output is pre-built files served directly by a web server. The browser fetches photo data from the JSON indexes, and password-protected albums are decrypted in the browser.

Albums can also be synced from Immich or PhotoPrism before a build. The [deployment guide](https://github.com/dougdonohoe/ddphotos/blob/main/docs/DEPLOY.md) lists an export for static hosts, rsync to Apache or nginx, and S3 with CloudFront.

## Worth knowing

The README names the companion desktop app, a separate repository, as the easiest way to run the project. The developer setup needs Go, Node.js and libvips.
