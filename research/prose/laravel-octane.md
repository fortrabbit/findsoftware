Laravel Octane is a Laravel package that serves a Laravel application through a high-powered application server. It boots the application once and keeps it in memory, then passes requests to it. The package is installed with Composer. Its README names FrankenPHP, Open Swoole, Swoole and RoadRunner as the servers it can run on, and each of them is a separate project.

## Worth knowing

The docs advise running a process monitor such as Supervisor in production, so that the Octane server stays running rather than starting for each request.
