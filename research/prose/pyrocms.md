PyroCMS is a content management system built on Laravel. Its views are Twig templates, and editors manage content through a control panel. Features arrive as addons, and the docs mark several modules as PRO. The release also requires the Streams Platform, a separate Composer package that the docs present as a platform layer beneath the CMS.

The [installation docs](https://pyrocms.com/documentation/pyrocms/latest/getting-started/installation) run `composer create-project pyrocms/pyrocms`, then a web or command-line installer. The web root must point at the public directory, and the storage, public/app and bootstrap/cache directories must be writable by the web server. The docs configure MySQL as the database.

## Worth knowing

The core is MIT-licensed. The PRO addons, including the API module, fall under a separate PRO License and come with a paid PRO subscription.
