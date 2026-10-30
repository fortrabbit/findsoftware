simple-acme is a command-line ACME client that requests certificates from Let's Encrypt and other ACME servers, and it installs them into IIS on Windows. The [getting-started guide](https://simple-acme.com/manual/getting-started) walks through a first certificate for an IIS site. Its default HTTP validation is handled by the program itself, and the program creates a Windows scheduled task that runs it every day to renew certificates when they are due.

The project is a fork of win-acme, which the [about page](https://simple-acme.com/manual/about/simple-acme) describes as the project it was cloned from. The [upgrading page](https://simple-acme.com/manual/upgrading) describes moving a win-acme 2.x installation over by copying files.

## Worth knowing

The full build loads plugins, and the trimmed build does not. Linux support is still in beta, and the program is built on .NET. The project takes donations through GitHub Sponsors and Patreon.
