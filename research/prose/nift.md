Nift is a command-line build tool for websites with its own template language. It is a native C++ program that the about page calls a dependency-aware website build system. The about page also presents a native scripting language and an interactive shell.

The output is ordinary files in a public directory. The [deployment guide](https://nift.dev/docs/hosting.html) says Nift does not need to run on the production server when the site is built before deployment, and it names preset targets for several hosting platforms.

## Worth knowing

Nift writes files and does not run a server, so anything that needs a process on the live site comes from the rest of the stack. The project runs from the nift-dev repository; the earlier nifty-site-manager repository is not part of this record.
