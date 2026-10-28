cloudflared is the command-line client for Cloudflare Tunnel, a tunneling daemon that proxies traffic from the Cloudflare network to your origins. The daemon sits between the Cloudflare network and an origin such as a web server, so the origin can stay closed to inbound connections. The [Cloudflare Tunnel documentation](https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/) covers setup and routing. It is distributed as standalone binaries, a Docker image, and Debian, RPM and Homebrew packages.

## Worth knowing

The tunnel is a service that Cloudflare hosts. The README asks users to add a website to a Cloudflare account before they use it, and says the requirement is kept for legacy reasons.
