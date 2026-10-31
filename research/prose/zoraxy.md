Zoraxy is a reverse proxy and forwarding tool that serves websites and other HTTP services, configured through a web UI. It is written in Go and ships as a compiled binary that runs on Linux, Windows and ARM boards. On Linux the [Getting Started guide](https://github.com/tobychui/zoraxy/wiki/Getting-Started) sets it up as a system daemon with systemctl. A Docker image is the other documented route.

Its ACME support obtains and renews Let's Encrypt certificates, with DNS challenges for some providers. The README names Nginx and Nginx Proxy Manager as the setups that its config converter helps people move from.

## Worth knowing

Plugins are kept in a separate official plugin repository. The config converter from nginx is marked experimental, and the Docker version is not meant for readers without Docker networking experience.
