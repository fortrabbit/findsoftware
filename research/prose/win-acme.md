win-acme runs on Windows and requests certificates from Let's Encrypt and other ACME services for the sites on the machine. The [getting started guide](https://www.win-acme.com/manual/getting-started) asks for the program to be unzipped to a folder that stays in place, because the scheduled task runs from it. The homepage describes creating and installing certificates on a local IIS server.

A scheduled task renews the certificates. The [automatic renewal page](https://www.win-acme.com/manual/automatic-renewal) says the task runs every day and checks two conditions before it renews.

## Worth knowing

The README says ZeroSSL officially maintains the repository. A fork named simple-acme describes itself as a clone of this project.

The system requirements page limits the current build to recent Windows Server editions and lists older builds for older Windows releases.
