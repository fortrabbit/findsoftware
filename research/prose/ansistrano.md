Ansistrano is a pair of Ansible roles, ansistrano.deploy and ansistrano.rollback, that deploy an application in the Capistrano style. Each deployment is set up as a new release folder on the target host, the current link is moved to it, and older releases are removed down to a configured number.

The rollback role moves the current link back to an earlier release. The deploy role takes its code from rsync, rsync_direct, git, svn, hg, HTTP download, S3 or Google Cloud Storage. The roles run from the machine that holds the Ansible inventory.
