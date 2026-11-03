Companion is the server half of the Uppy file uploader. It is a Node.js server that holds the OAuth connections to remote file sources such as Google Drive and Dropbox, and it streams the files it fetches to an upload destination. The Uppy client sends its remote-file requests to Companion, and Companion does not keep the files. It runs as a standalone server or as middleware mounted in an existing Express application, and the [documentation](https://uppy.io/docs/companion/) covers both modes. The package is published on npm as `@uppy/companion` and is built from the Uppy monorepo, which Transloadit maintains.

## Worth knowing

Companion runs as its own long-running Node.js process, so the host has to keep it running. Several instances can share a Redis server, and the docs describe that setup.

Transloadit also runs a hosted Companion, which requires a Transloadit plan. On the hosted service, the Google Drive provider does not work with the shared OAuth app, so it needs the operator's own Google OAuth app. Windows is not a supported platform.
