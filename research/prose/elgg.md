Elgg is a social networking engine written in PHP. It needs MariaDB or MySQL, and users install it with Composer or by uploading a zip archive. The [installation guide](https://learn.elgg.org/en/stable/intro/install.html) lists the PHP extensions, database versions and web servers it requires.

PHP serves each request. Background tasks run from timed requests to the site, so the host also needs a scheduled job that sends them. The [web services guide](https://learn.elgg.org/en/stable/guides/web-services.html) describes the API.

## Worth knowing

The full package with its core plugins is licensed under GPLv2. The framework without the plugins is licensed under MIT.
