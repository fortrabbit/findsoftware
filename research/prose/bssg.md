BSSG is a static site generator written in Bash. It reads Markdown posts, pages, drafts and static files from a site directory, and `./bssg.sh build` writes the finished site to an `output/` directory inside it. The README describes keeping the site content apart from the BSSG core scripts, so the core can be updated with `git pull` without touching the site. A built-in development server previews the output locally, and a custom deployment script can run after each build.

## Worth knowing

The README says the default bash on macOS is too old, so a newer bash from Homebrew is needed to run it there.
