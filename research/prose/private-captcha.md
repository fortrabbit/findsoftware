Private Captcha is a CAPTCHA service that protects forms and APIs with a proof-of-work task. The homepage describes the task as an invisible cryptographic one. The server is written in Go, uses PostgreSQL for its backend database and ClickHouse as a second database.

The [self-hosting repository](https://github.com/PrivateCaptcha/self-hosting) runs the stack with Docker, and the [quickstart](https://docs.privatecaptcha.com/docs/deployment/quickstart/) describes a bootstrap script that writes the environment file. The server listens on port 8080 by default, and the admin portal is a web interface that the operator logs into with an admin email address. Intmaker OÜ, the company behind the project, also runs the managed service.

## Worth knowing

The PolyForm Noncommercial license covers the community edition for non-commercial use, and commercial use of the self-hosted software needs a license under the company's EULA. The enterprise edition is a paid self-hosted edition, and the community edition needs a license key in its environment.
