Syro is a router for Ruby web applications, installed as the syro gem. Applications are written as a block that matches the request path and method with methods such as `on`, `get` and `post`, and sub-applications are mounted with `run`. The [README](https://github.com/soveran/syro/blob/master/README.md) describes its design as inspired by modular Cuba applications and places the library in the tradition of Rum and Cuba. The tutorial starts an application with `rackup` from a `config.ru` file.

## Worth knowing

Syro provides routing only. The README states that it has no security features, no rendering features and no Rack middleware support out of the box, so a framework or application built on it supplies those itself.
