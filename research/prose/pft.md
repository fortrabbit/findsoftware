PFT is a static website generator written in Perl, distributed as the App-PFT command line tools. Content lives in a content directory of the site project, and `pft make` compiles it with Template::Alloy templates into a build directory. The README describes the result as something a plain HTTP server can serve, with no server-side generation. `pft pub` can publish the build over rsync and ssh.

The tools are installed with `perl Makefile.PL` or with cpanminus, and they use the separate PFT library for access to the file system.

## Worth knowing

The homepage is a page on the maintainer's personal site, which describes PFT as one of the maintainer's personal projects and as the generator used for that site.
