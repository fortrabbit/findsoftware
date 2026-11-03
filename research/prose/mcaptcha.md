mCaptcha is a CAPTCHA server that protects forms with a proof-of-work challenge instead of puzzles. The visitor's browser computes a SHA256 proof of work through a widget the site loads from a CDN or serves itself. The site's backend then sends the resulting token to the mCaptcha server's verification endpoint before it processes the form.

The server is a Rust binary that the [bare-metal guide](https://mcaptcha.org/docs/self-hosting/bare-metal/) runs as a systemd service, with Postgres or MariaDB for its data. An optional Redis cache can sit beside it, and the project says mCaptcha does not implement SSL, so a reverse proxy goes in front. Site keys are created in a dashboard, and the [installation guide](https://mcaptcha.org/docs/webmasters/installing-captcha/) walks through the widget and the verification call. The project says its CAPTCHA routes are cookie free and that it does not use IP addresses for rate limiting.

## Worth knowing

The README says the project has no stable release yet, although GitHub lists a v0.1.0 release.
