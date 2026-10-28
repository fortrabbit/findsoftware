JSPM is a package manager for browser import maps. The jspm command-line tool writes a project's import map to importmap.js, installs packages into it, and resolves each package to a URL on a CDN or to a folder in node_modules. Its development server listens on port 5776, and jspm build runs RollupJS over the entry points and writes the result to a dist folder.

Packages resolve against the jspm.io CDN by default. The [getting-started guide](https://jspm.org/getting-started) describes the other providers it supports, among them unpkg, jsDelivr and local node_modules. After a production build, the dist files go to a web server or hosting provider.

## Worth knowing

An application that loads its packages from jspm.io depends on that hosted CDN at run time. The FAQ describes jspm.io as a production modules CDN with a status page.
