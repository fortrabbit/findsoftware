SlickStack is a Bash script that sets up a LEMP stack for one WordPress site on an Ubuntu server. The [installation guide](https://slickstack.io/install) runs it with a single wget and bash command. After that, the server runs scheduled cron jobs that connect to the project's GitHub repository, so most upkeep happens through those jobs rather than by hand. MySQL runs on the same server by default and connects over TCP. WordPress Multisite can be switched on in its configuration.

## Worth knowing

The README says the design is one primary domain per server, with no built-in web interface. LittleBizzy, a private business, maintains the project and also sells setup services for it.
