REDAXO is a PHP content management system with a backend that editors use to manage the site. Article output follows templates, which define the HTML structure of each article and support PHP code and REDAXO variables. Content is stored in a MySQL or MariaDB database that the installer needs empty at the start. Add-ons extend the system, and the project lists them in a public directory.

Installation uses a ZIP download, the REDAXO loader script, a command-line download, or a Docker image. Apache works with the .htaccess files REDAXO ships. On nginx, the site needs its own rules to deny web access to the src, data, cache and bin folders under /redaxo.

## Worth knowing

REDAXO 5 and later is MIT-licensed, and the license page adds a condition: the backend must link to redaxo.org and show the REDAXO logo.
