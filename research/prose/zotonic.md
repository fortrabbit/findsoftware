Zotonic is a content management system and web framework built on Erlang. Content is stored in PostgreSQL, and its backend offers a way to manage content. One installation runs several sites through virtual hosting, a translation module handles multiple languages, and an import module migrates a WordPress export into a site. Access to content is governed by rules between user groups and content groups.

A development checkout comes from the git repository, and a Docker or Podman image and a Nix shell are the other routes, as the [getting-started guide](https://zotonic.com/docs/1526/getting-started) describes.

## Worth knowing

Zotonic runs as a foreground process under a host service manager, so the host has to keep an Erlang process running. It also needs a PostgreSQL database, so a host that only serves static files cannot run it. On Windows the requirements page points to WSL or a container.
