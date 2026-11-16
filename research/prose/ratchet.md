Ratchet is a PHP library for serving WebSocket connections asynchronously, added to a project with Composer. A Ratchet server is a long-running PHP process, and the project's deployment guide recommends running it under a supervisor daemon that restarts it if it halts.

## Worth knowing

The README says shell access is required and root access is recommended. To serve WebSockets on port 80 or 443 next to a regular web stack, it names a reverse proxy or a second machine.

The README also announces an effort to revive the project.
