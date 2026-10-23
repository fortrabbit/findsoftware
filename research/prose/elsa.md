Elsa is a helper module for Flask websites that are frozen with Frozen-Flask. A script passes the Flask app to `elsa.cli()` and gains `serve` to preview the site, `freeze` to write an HTML snapshot, and `deploy` to publish the frozen site to GitHub pages. The [quickstart](https://github.com/pyvec/elsa/blob/master/QUICKSTART.rst) sets this up with Travis CI, which freezes and deploys after each push.

## Worth knowing

The README says the Travis CI deployment force-pushes the gh-pages branch in a single commit, which rewrites that branch's history. It also says a URL without a trailing slash makes GitHub Pages serve the page with the wrong content type, so Elsa treats that as an error and the README asks for trailing slashes.
