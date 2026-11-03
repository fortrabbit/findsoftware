picfit is a Go server that resizes and manipulates images on request. It acts as a proxy on a storage engine, serves the results ideally behind an HTTP cache such as varnish, and works with several storage backends and key/value stores for the keys of generated images. It is built from source with make, or with a Docker-based build that produces a binary, and run as a server process configured with a JSON file.

## Worth knowing

The build needs the libvips image library. Requests can be required to carry an HMAC-SHA1 signature made with a secret key, which a configuration option turns on.
