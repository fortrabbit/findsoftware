WebHook Tester is a Go server that gives each test a unique, randomly generated URL for capturing webhooks and HTTP requests. Its storage can be memory, Redis or a local directory, and its README describes a built-in web interface for the recorded requests, and a tunnel that exposes a locally running instance to the internet through ngrok. The app ships as a single binary, a container image and a Helm chart, and the README calls it a self-hosted alternative to webhook.site.

## Worth knowing

The README says several instances behind a load balancer need Redis.
