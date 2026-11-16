Laravel Localization is a Laravel package for applications that serve the same content in several languages. According to its README it detects the language from the browser, saves the chosen locale in a session or cookie and redirects accordingly, supports translatable routes, can hide the default locale in the URL, and provides helpers such as a language selector.

## Worth knowing

The README says the package is by default not compatible with Laravel's route caching, so localized routes need its trait and a separate caching command to work with a cached route list.

The README also names a successor package for new projects and links a migration guide for switching to it. It says this package remains actively maintained, with compatibility updates continuing.
