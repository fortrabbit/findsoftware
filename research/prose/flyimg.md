Flyimg is a Dockerized image server that fetches an image from a URL, resizes, crops and converts it, caches the result and serves it. Options go in the request path before the source image URL, so a page can point its img tags at the server, and the output is written to local storage or to an S3 bucket. The container runs PHP under nginx and php-fpm, which the [install guide](https://docs.flyimg.io/install/) describes as two processes started together. The project publishes a Docker image, a source build and a [Helm chart](https://docs.flyimg.io/helm-chart/) for Kubernetes, and it also offers a fully managed service under the same name.

## Worth knowing

The server is a long-running container, not static files. Image processing uses ImageMagick, and the output formats include AVIF, WebP, MozJPEG, PNG, GIF and JPEG XL. The docs describe domain restrictions for image sources and signed, encrypted URLs.
