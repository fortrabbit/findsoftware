Anubis is a web application firewall written in Go. The operator places it between a reverse proxy, such as Nginx or Caddy, and the service being protected, with one Anubis instance for each protected service. Visitors receive a challenge page, a proof-of-work calculation that runs in their browser, before their requests are forwarded to the service.

The project publishes native packages for Debian-based and Red Hat-based systems, a tarball, a Windows installer that runs Anubis as a system service, and a Docker image on the GitHub Container Registry. The [installation guide](https://github.com/TecharoHQ/anubis/blob/main/docs/docs/admin/installation.mdx) lists the settings as environment variables, such as the target address and the difficulty.

## Worth knowing

The README calls Anubis "a bit of a nuclear response": a site behind it is blocked from smaller scrapers and may inhibit good bots such as the Internet Archive, which bot policy definitions can allowlist explicitly. The commercial edition, BotStopper, is built on the open source core and adds branding controls and a private bug tracker. Some settings in the docs are marked as BotStopper-only.
