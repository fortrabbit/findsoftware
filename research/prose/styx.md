Styx is a static site generator written in the Nix expression language and installed through Nix. Content is written in Markdown, AsciiDoc or Nix, and the Nix templates of a theme produce the pages. Site configuration is declared through an interface like NixOS modules, with every declaration type-checked. The styx doc and styx site-doc commands print the embedded documentation and generate documentation for a site.

## Worth knowing

The documentation names Nix as the only dependency, and the documentation describes deploying a built site to GitHub Pages or an Amazon S3 bucket, or with NixOps or rsync.
