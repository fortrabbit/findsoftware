TypiCMS is a modular, multilingual content management system built with Laravel. It manages pages, events, news, menus and other content types through an admin panel, and each content type can be installed as a Composer module. A site is created with `composer create-project typicms/typicms` and keeps its content in a database. Pages are served with locale-prefixed URLs, and the project generates a sitemap, an llms.txt file and Markdown versions of public pages. Samuel De Backer, named in the license, maintains it.

## Worth knowing

Publishing a module copies its source into the project under `Modules/` and removes its Composer package, so the site then carries that module's code itself.
