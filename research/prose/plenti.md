Plenti is a static site generator for Svelte templates, with a Go command-line tool that runs the build. The `plenti build` command writes the site to a folder named public as static assets, and the pages hydrate into a single-page application with HTML fallbacks for navigation without JavaScript.

Content lives in JSON files in the project's Git repository. The in-browser editor changes those JSON files, which can then be committed with Git. The CLI is installed through Homebrew, Snap or a downloaded release.

## Worth knowing

The editor on a deployed site needs a remote Git repository and an OAuth app, both set in `plenti.json`, so that feature depends on a Git host. The README says the API may change until a stable 1.0 release.

[CMS setup](https://plenti.co/docs/cms-setup/) describes the local and deployed editing options.
