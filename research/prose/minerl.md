minerl is a blog-aware static site generator written in Perl. Pages, templates and resource files are plain files in a site directory, templates expand variables with HTML::Template, and the README describes tag pages, archives by month and template inheritance through a layout header.

It installs with make and make install from a git clone, after the Perl modules it depends on are installed. The generate command creates a site, build writes the pages, and serve starts an HTTP server for the output.

## Worth knowing

The repository has tags but no GitHub release, and no LICENSE file; the Artistic License 2.0 is the one the README names.
