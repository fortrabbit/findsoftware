Canvas adds a publishing admin to an existing Laravel application. It is installed with Composer, keeps published content in the application's database, and separates contributor, editor and admin roles in its admin interface. An optional starter reader frontend renders a public blog from Blade views that the site owner can customize. The [installation guide](https://github.com/austintoddj/canvas/blob/main/docs/installation.md) describes the setup.

## Worth knowing

The [content guide](https://github.com/austintoddj/canvas/blob/main/docs/content.md) calls Canvas headless, but its JSON routes serve only the admin interface and are not a public blog API. A public site reads posts through Canvas's Eloquent models or an API the site owner builds.
