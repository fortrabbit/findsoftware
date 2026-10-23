Jekyll Admin is a Jekyll plugin that adds a CMS-style graphical interface for writing content and administering a Jekyll site. It is added to the site's Gemfile in the jekyll_plugins group, and the interface is served at /admin by the local Jekyll server started with bundle exec jekyll serve. It has two parts: a Ruby HTTP API under /_api that handles Jekyll and filesystem operations, and a JavaScript front end built on that API.

## Worth knowing

The [self-hosting page](https://jekyll.github.io/jekyll-admin/self-hosting) describes running the admin on a live site behind an nginx reverse proxy, so a live site with the admin needs a process that keeps running. The API page says the HTTP API is pre-release and may change without notice until it reaches a 1.0 release.
