Tarbell is a Python tool built on Flask that turns a project directory of Jinja2 templates into a static website. `tarbell generate` writes the site as HTML into a directory, and `tarbell publish` uploads it to Amazon S3 once S3 buckets are configured; the docs note that `tarbell generate` output can be synced to other hosts with a deployment script. During development, `tarbell serve` runs a preview server from the project directory. Project content can come from an optional Google Spreadsheet, as the [building guide](https://tarbell.readthedocs.io/en/latest/build.html) describes.

## Worth knowing

The install page states that Tarbell requires Python 2.7 and Git, does not currently support Python 3 and does not work on Windows.
