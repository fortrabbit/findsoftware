PurgeCSS removes unused CSS selectors from a project. It analyzes the content files and the CSS files, matches the selectors in the stylesheets against the content, and removes the selectors it does not find. It can be run from a command line interface, alone or with a configuration file, or through a plugin for a build tool.

It is installed with npm as a dev dependency. The repository is a monorepo that publishes its build-tool plugins as separate packages, and the core package is the one the install guide names.
