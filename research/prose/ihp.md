IHP is a web framework written in Haskell. A schema file is the single source of truth: the framework generates records, ids and enums from it, and checks SQL queries against the project's PostgreSQL database at compile time. Its HTML templating language, HSX, is parsed at compile time too. The framework is installed with the Nix package manager.

The server model is a long-running process that listens on a configured port, so a running IHP app needs a host that keeps a process alive, not one that serves static files. The [deployment guide](https://ihp.digitallyinduced.com/Guide/deployment.html) covers Docker, NixOS, bare metal and AWS EC2. digitally induced GmbH, based in Düsseldorf, Germany, maintains the project.

## Worth knowing

The installation guide requires Nix, supports macOS and Linux, and says native Windows is not supported. The company also sells IHP Pro and IHP Business licenses next to the MIT-licensed framework. The pricing page lists features that the Basic tier does not include, among them Docker support.
