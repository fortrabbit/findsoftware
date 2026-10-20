Dispatch is a PHP library of global functions for routing HTTP requests. A script registers handlers with `route()` for an HTTP method and path, adds middleware with `apply()`, and calls `dispatch()` to run the matching handler. The [README](https://github.com/noodlehaus/dispatch/blob/master/README.markdown) also lists helpers for named route parameters, responses, redirects, values shared within a request, and PHP templates through `phtml()`.

The library is a single `dispatch.php` file that the application requires.
