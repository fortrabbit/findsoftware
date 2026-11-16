Twig is a template engine for PHP. A PHP application loads templates through a loader and an environment object, then renders a named template with an array of variables. Twig compiles each template to plain PHP code and keeps the compiled files in a cache directory, so the application runs compiled code rather than the template text.

Twig can also evaluate templates written by users in a sandbox, where the developer decides which tags, filters and object methods the template may use. The [documentation](https://twig.symfony.com/doc/3.x/intro.html) introduces the basic API.
