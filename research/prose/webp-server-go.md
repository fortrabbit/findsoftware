WebP Server Go is a Go server that converts images on request. It reads JPEG, PNG, BMP, GIF, SVG, HEIC, NEF and WebP files from a directory and returns them as WebP, AVIF or JXL, under the URL of the original image, so the image links on a site stay the same. A reverse proxy such as Nginx or Caddy sits in front of it for public traffic.

Converted outputs are cached in a separate `exhaust` directory and source metadata in a `metadata` directory, and the project's quick start mounts all three into a container. The server is started with Docker Compose or as a binary.

## Worth knowing

Docker is the route the README recommends, because the binary needs libvips and can run into `glibc` and dependency problems. The binary page also reports a potential memory leak that the project has not resolved. The team behind the project also runs WebP Cloud, a hosted image service on webp.se.
