chubbyphp-framework is a PHP microframework that handles HTTP through PSR-7 messages, PSR-15 request handlers and middleware, and PSR-17 factories. An application is a middleware pipe: the [README](https://github.com/chubbyphp/chubbyphp-framework/blob/master/README.md) example passes an exception middleware, a route matcher middleware and a callback request handler to the application, then emits the response built from the global request. An optional `ApplicationBuilder` facade wires the same pipe.

Routing sits in a separate package. The README names chubbyphp-framework-router-fastroute and chubbyphp-framework-router-symfony as routers that implement the framework's route matcher interface, and it lists several PSR-7 implementations that can be installed alongside.

## Worth knowing

The README's Server section lists Nginx, ReactPHP, RoadRunner, Swoole and Workerman, and marks the built-in PHP server as development only. It links migration guides between major versions and one from Slim.
