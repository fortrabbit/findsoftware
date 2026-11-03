MailCrab is an email test server for development, written in Rust. It accepts all SMTP mail, keeps it in memory while it runs, and shows it in a web interface that also displays attachments, headers and the raw message. The README describes it as inspired by MailHog and MailCatcher.

It runs from a Docker image, a single binary build, or a Helm chart on Kubernetes.

## Worth knowing

The README describes MailCrab as a development tool, not a service for live mail. Messages stay in memory until a restart unless a retention period clears older ones.
