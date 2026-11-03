Pilbox is an image processing application server that fetches an image from a URL and resizes, crops or converts it. It is written in Python on the Tornado web framework and uses the Pillow imaging library. It runs as a server process behind a web server or CDN, installs with pip, and can also be used as a library to build a custom image server. The README states that the project is no longer maintained.

## Worth knowing

The README advises against exposing the server to the internet directly, because the application includes no caching of its own. Requests can be restricted by an HMAC signature or an allowed-hosts list.
