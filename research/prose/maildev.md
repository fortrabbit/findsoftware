MailDev is a local SMTP server with a web inbox for testing the email a project generates during development. It catches the mail an application sends and shows each message in the browser, and it can relay selected messages to an outgoing SMTP server. A [REST API](https://maildev.github.io/maildev/docs/reference/rest-api/) serves the stored mail as JSON. It is written in TypeScript and runs on Node.js, installed with npm, started with npx or run from its Docker image. Its documentation includes a comparison with MailCatcher.

## Worth knowing

The project describes MailDev as a development tool that runs on a developer's machine, not on a live site.
