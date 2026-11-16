playwright-go is the Go library for Playwright, which drives Chromium, Firefox and WebKit through one API. The package ships a Node.js runtime of around 50MB together with the Playwright driver and talks to it over stdio, and installing the driver also downloads the browsers. The README names end-to-end testing among its uses.

## Worth knowing

Each minor version of the module needs a specific Playwright driver version, so the driver install step uses the version named in the project's go.mod.
