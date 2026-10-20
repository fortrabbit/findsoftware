Deployer is a PHP command-line tool that a developer or a CI job runs to release code to servers over SSH. A `deploy.php` file sets the SSH user, the deploy path and the tasks, and the default layout keeps each release in its own folder with a `current` symlink. Recipes add tasks for frameworks and CMSs, and a provision recipe installs the server stack on Ubuntu.

## Worth knowing

Deployer runs on the machine that starts the deployment, so the live server needs no Deployer process. Provisioning needs root login with an SSH key, which recent Ubuntu images disable by default, according to the [getting started guide](https://deployer.org/docs/8.x/getting-started).
