Mina is a deployment tool for Ruby projects. For each deploy, the tool generates a Bash script and runs it on the server over a single SSH session, so the server needs SSH key access, git, Ruby and Bundler in place before the first deploy.

The setup and deploy commands are run from the developer's own computer, which connects to the server to create the folders and then runs the deploy task.

## Worth knowing

The project's own list of third-party modules says many of them are not updated to version 1.x.
