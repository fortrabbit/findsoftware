LibreTranslate is a machine translation API whose translation engine comes from the Argos Translate library. It is a Python program. Installed with pip, it starts a local web server that offers an HTTP endpoint for translating text and a web interface for doing the same by hand, and the same server runs as a systemd service, from a Docker image, from a clone of the repository through a run script, or on Kubernetes with a Helm chart. The web interface can be switched off with a startup option, and the [installation guide](https://docs.libretranslate.com/guides/installation/) lists the routes.

The project also runs a managed service for people who do not want to host it. That service is offered beside the free software and uses API keys.

## Worth knowing

The managed service uses API keys. The docs state that using libretranslate.com in production requires buying an API key, and that the software can be run for free on a server of one's own.
