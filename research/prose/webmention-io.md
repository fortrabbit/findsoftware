Webmention.io is a receiver for webmentions, an implementation of the Webmention protocol that runs apart from the website it serves. A site adds a link tag to its HTML pointing at the service, and a static site gets webmentions that way. The service verifies each mention in the background with a worker. The hosted service at webmention.io is run by the project's maintainer, and the same code can run on a server of one's own: PHP with MySQL or MariaDB, Redis and a worker process, as the README's development section describes.

The API lists and counts the mentions of a page and exports an account's data. A small script renders a page's mentions with no dependencies. Web hooks fire when a mention is received or deleted, and a dashboard deletes mentions and blocks their sources.

## Worth knowing

The install steps sit in the README's development section, and the repository has no releases, so there is no tagged version to pin. The default branch has no LICENSE file although the README names one. Sign-in uses IndieAuth, with an indielogin.com fallback that an operator setting can switch off.
