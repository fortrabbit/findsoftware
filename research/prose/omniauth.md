OmniAuth is a Ruby library that standardizes multi-provider authentication for web applications. It is installed as a gem, and each of its strategies is a Rack middleware, so one or more sign-in providers are added to an application's middleware stack. The [OmniAuth wiki](https://github.com/omniauth/omniauth/wiki) holds the in-depth documentation and a community list of third-party strategies.

## Worth knowing

The built-in Developer strategy is described in the README as completely insecure and not usable in production, so it is meant for development only.
