Engineer is a static website generator written in Python. Posts are written in Markdown and stored as text files, templates are written in Jinja 2, and the output is HTML files that can be uploaded to any web host with FTP or rsync, as the [deployment page](https://engineer.readthedocs.io/en/master/deployment.html) describes. The `engineer` command builds the site and `engineer serve` starts a small development server for previewing it.

The introduction says Engineer is not a CMS and that it assumes most content comes as articles.

## Worth knowing

The [command reference](https://engineer.readthedocs.io/en/master/cmdline.html) says the development server is not designed for production. The introduction states that Engineer requires Python 2.7 and has not been tested on Python 3. It describes Emma, an optional management site, but the documentation page for Emma reads "Coming soon".
