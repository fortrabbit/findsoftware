Coolify is a self-hostable platform for deploying applications, databases and services to servers the user controls. The instance connects to each server over SSH, prepares it to run Docker workloads, and coordinates builds, deployments, domains and HTTPS. It is written in PHP and installed with a single install script. The resources it deploys run as standard Docker containers on the connected servers.

Coolify Cloud runs the instance for the user, who still supplies the servers. The homepage describes roles for team members and sign-in through several identity providers.

## Worth knowing

The [get-started guide](https://coolify.io/docs/get-started/introduction) says that running resources keep running when the instance is unavailable, but automation and dashboard control stop. Self-hosting makes the user responsible for the instance's updates, backups and recovery.
