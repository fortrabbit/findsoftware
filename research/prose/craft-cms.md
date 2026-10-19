Craft CMS is a PHP content management system built on Yii 2 by Pixel & Tonic. It has a browser control panel for editors, Twig templates for rendering and a GraphQL API for headless use, with content stored in a database. Multi-site and localization are included in every edition, including the free Solo edition. The paid editions raise the number of user accounts and add control panel branding.

Deployment needs SSH access to run console commands. The queue runner is web-based by default, and the vendor's own hosting platform, Craft Cloud, is described in the deployment guide.

## Worth knowing

The license is custom rather than open source, and each licensed copy can be installed in one production environment. A daemonized queue runner has to be restarted after each deploy, and the deploy steps include running php craft up. The [requirements page](https://craftcms.com/docs/5.x/requirements.html) lists the PHP extensions and the writable paths.
