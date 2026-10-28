devenv is a developer environment tool built on Nix. A project declares its environment in a devenv.nix file on top of Nix, and the inputs of that environment are pinned in a lockfile. The same environment can be built into OCI containers. An experimental machines feature installs or deploys NixOS and nix-darwin configurations over SSH from the command line.

## Worth knowing

Nix has to be installed before devenv. The install guide covers Linux, macOS and Windows through WSL2. A cloud version of the environments is in private beta.
