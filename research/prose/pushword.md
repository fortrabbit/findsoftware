Pushword is a content management system built on Symfony. Pages are Markdown files with front matter, or database entries, rendered with Twig templates. An admin extension manages pages, media and users, a REST API exposes the content, and several sites and languages run from one installation.

The static generator extension exports the whole site as files for GitHub Pages, Apache, FrankenPHP or Caddy. The same installation can also be served on any PHP host.

## Worth knowing

The project offers three optional Rust executables that take over selected operations from PHP. The project calls all three experimental, and each defaults to PHP.
