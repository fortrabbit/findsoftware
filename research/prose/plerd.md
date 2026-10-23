Plerd is a blogging platform that builds a static website from a folder of Markdown files, using Template Toolkit templates for its pages. The `plerdall` program builds the whole site on demand, and `plerdwatcher` is a daemon that monitors the source folder and republishes whatever changed.

There is no database and no admin interface. Posts are Markdown files in the source folder. The software is written in Perl, needs Perl 5.26 or later, and installs from CPAN with `cpanm`.

## Worth knowing

The [README](https://github.com/jmacdotorg/plerd/blob/master/README.md) says the source folder typically lives on the web server and is synced from a laptop with Dropbox, rclone or similar, so `plerdwatcher` runs where the folder is. Plerd serves nothing itself: a separate web server serves the generated files.
