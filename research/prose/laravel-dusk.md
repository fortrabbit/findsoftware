Laravel Dusk is a PHP package that provides a browser automation and testing API. It drives Google Chrome through a standalone ChromeDriver binary, which the dusk:install Artisan command installs, so no Java or Selenium server is needed by default. It is added with Composer as a development dependency, and the [Laravel documentation](https://laravel.com/docs/dusk) describes writing and running the tests.

## Worth knowing

The Laravel documentation recommends Pest for browser testing in new projects, citing the browser testing that Pest includes. The documentation says that a manually registered Dusk service provider must never be registered in a production environment.
