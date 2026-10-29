frp is a reverse proxy that exposes a local server behind a NAT or firewall to the internet, through a server with a public IP address. It is written in Go and ships as a binary for each platform, downloaded from the GitHub release page, with no other runtime to install. The server process, frps, can run in the background as a systemd service. It forwards traffic from the public server to services on the local network, including HTTP and HTTPS requests to web services addressed by domain name.

## Worth knowing

The README describes a successor line in development that will not be compatible with the current one, while the current line continues to receive releases. The README says the project will move from version 0 to version 1 at the appropriate time.
