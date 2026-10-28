Magallanes is a deployment tool for PHP applications, written in PHP. It is added to a project as a Composer dev dependency and run from a terminal as `bin/mage deploy` followed by an environment name. The project's `.mage.yml` file defines each environment: the SSH user, the target folder, the hosts, and the tasks to run at each deployment stage, such as installing vendors or warming a cache. Code reaches the hosts through Tar or Rsync over SSH, and when releases are enabled the previous deployments stay on the hosts for rollback.

Built-in tasks cover Git, Composer, Symfony, file system operations and command execution, and the project's documentation describes how to write custom tasks.

## Worth knowing

A global Composer install cannot use custom tasks, because the application's autoloader is not loaded.
