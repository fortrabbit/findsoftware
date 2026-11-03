Dagu is a self-hostable workflow engine. Workflows are declared in YAML and run scripts, commands and containers on one machine or on a fleet of workers, and the server serves a built-in web UI. An external caller can trigger a single workflow through a token-authenticated webhook. Installs use a shell script, Homebrew, npm, Docker, Helm or PowerShell. The npm package downloads the Go binary during installation. The [deployment models](https://docs.dagu.sh/overview/deployment-models) page describes an always-on server that sends reports while workers run the jobs.

## Worth knowing

SSO, RBAC, audit logging and incident routing come with the Team and Pro self-host plans. Embedding the Go API in a product distributed outside the GPL needs a separate written agreement, according to the licensing notes. Public webhook URLs and remote MCP access run through Dagu Cloud.
