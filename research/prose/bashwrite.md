BashWrite is a single bash script that builds a blog from Markdown files. Posts are written in a `write` folder with frontmatter for the title, description, date, tags, draft status and pinning. Running `./bw.sh b` generates the blog's HTML pages, tag pages, an RSS feed and a sitemap.

The script is installed by downloading `bw.sh` from the release page and editing the settings at its top, such as the blog name, author, base URL and theme color. The [demo blog](https://raycc51.github.io/BashWrite/) is built with the same script.

## Worth knowing

The README lists "Hard to customize" as a limit and says the Markdown converter is not perfect. Its bug list is on the demo blog. The README also describes publishing the generated files to GitHub Pages from a gh-pages branch.
