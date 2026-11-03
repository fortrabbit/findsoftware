wsrv.nl is an image service. It takes an image URL and parameters in the query, fetches the image, resizes or converts it with libvips and serves the result through nginx with a cache. The repository holds the code of the public service at wsrv.nl and is meant for running on a server of one's own. The [Docker guide](https://github.com/weserv/images/blob/5.x/docker/README.md) describes pulling the image from the GitHub Container Registry or building the container from the repository, after which the server answers on a local port.

Requests take parameters for size, fit, crop, mask, orientation, adjustment and output format, as the [documentation](https://wsrv.nl/docs/) lists them. Images are cached on the server and in a CDN, and the browser cache lifetime is a parameter as well.

## Worth knowing

The public service is free and filters some origin domains, and it limits uncached requests per visitor address. The FAQ says the code can run on a server of one's own without those limits. The server depends on libvips and nginx.
