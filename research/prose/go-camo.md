go-camo is an image proxy for pages served over HTTPS. A web app rewrites each image URL and signs it with an HMAC. The proxy checks the signature, decodes the URL, fetches the image from its origin and streams it to the client, so the page does not load non-secure images directly.

It is a Go program that builds to a static binary. The README says it does not daemonize itself and recommends a process supervisor for production. Release binaries, a container image and a source build are the install routes it names. It accepts hex and base64 encoded URLs and supports optional allow and deny filters for origins.

## Worth knowing

The README recommends fronting go-camo with a CDN where possible. It also says the container images are untested, and that the binary releases are the preferred route unless a container is required.
