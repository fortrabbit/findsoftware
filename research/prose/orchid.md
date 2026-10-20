Orchid is a Laravel package for building back-office applications, admin panels, user panels and dashboards. The [readme](https://github.com/orchidsoftware/platform/blob/master/readme.md) describes working in PHP without writing HTML, CSS or JavaScript, and the [documentation](https://orchid.software/en/docs/) states that the HTML is generated with Blade or Vue.

The [installation guide](https://orchid.software/en/docs/installation) starts from a new Laravel project and a database. Composer adds the package, and artisan commands install it and create the first admin user. The admin path defaults to `/admin`.

## Worth knowing

The installer overwrites the `app/Models/User` model of the Laravel project, as the installation guide says.
