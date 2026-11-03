URL-to-PNG is a self-hosted HTTP service that renders a web page and returns it as a PNG image. A page calls the service with query parameters, such as the URL to capture and the image width, and the service caches the rendered image. The [getting started guide](https://jasonraimondi.github.io/url-to-png/getting_started/) describes the Docker image, which is also on Docker Hub, and a local development setup from source.

## Worth knowing

Pages render in a headless Chromium browser that the service drives through Playwright. The cache can write to a local directory, an S3 bucket or CouchDB, as the configuration page describes.
