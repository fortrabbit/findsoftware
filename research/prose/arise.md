Arise is a static site generator written in Bash, maintained by Spectra Secure. A site is a set of page folders in a Git repository. A GitHub Actions workflow builds the site and writes the output to an html branch, and a cloud static host serves that branch. Pages are written in Markdown and converted with pandoc.

The build needs pandoc and the GNU versions of date, find and awk, so the machine that builds the site needs them installed.

## Worth knowing

The code is licensed under AGPL-3.0. The example site is MIT and the logo is CC-BY-SA-4.0, so a site built from the example carries its own terms.
