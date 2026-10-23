Stapy is a static site generator written in Python that works on any operating system without additional packages. Pages are defined as JSON files in a `source/pages` directory and rendered through HTML templates and themes, with an expression syntax for variables and blocks and Python plugins for custom code.

A local HTTP server serves the site while it is being written, and an official editor plugin runs in the browser from that server. A build writes the static files of each environment to the `web` directory, so the production folder can be sent to a classic host by SFTP or pushed to a static host. The [documentation](https://stapy.magentix.fr/) describes the steps.

## Worth knowing

The old address stapy.net no longer resolves; the README names stapy.magentix.fr as the official website. The source is on Sourcehut.
