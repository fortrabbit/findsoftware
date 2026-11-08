Faraday is an HTTP client library for Ruby that gives one interface over several HTTP adapters, such as Net::HTTP, and runs requests and responses through Rack-style middleware. Code creates a connection with a base URL, default headers and middleware, then calls the HTTP verb methods on it.

The included middleware covers authentication, URL encoding, JSON encoding and decoding, instrumentation, logging and raising errors. The documentation also describes custom adapters and custom middleware. The gem is installed through Bundler's Gemfile or with the gem command.
