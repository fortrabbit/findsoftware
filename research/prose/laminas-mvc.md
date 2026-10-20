laminas-mvc is the event-driven MVC layer of the Laminas Project, with applications, controllers and plugins. It is installed with Composer, either with `composer require` in an existing project or from the laminas-mvc-skeleton starter, and the skeleton's setup instructions point Apache or Nginx at the project's public directory. The [laminas-mvc docs](https://docs.laminas.dev/laminas-mvc/) cover installation and the rest of the API.

## Worth knowing

The project calls the package feature-complete and in security-only maintenance mode. It receives security patches until the end of 2028, with no new features or bug fixes, and no releases after that, as the [end-of-life schedule](https://getlaminas.org/blog/2026-03-06-laminas-mvc-eol-schedule.html) states. The same post encourages moving to Mezzio, the Laminas middleware approach.
