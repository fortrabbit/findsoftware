Pitchfork is an HTTP server that preforks worker processes for Rack applications. Its workers share memory through copy-on-write, and the server runs as a long-lived process.

Applications install it with Bundler through the Gemfile, or with gem install. Shopify Inc. maintains it, and the source is hosted in the Shopify GitHub organization.
