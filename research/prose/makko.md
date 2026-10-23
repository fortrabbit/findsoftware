Makko is a static site generator that turns Markdown posts into a website, with templates written in Mustache. It is a single command-line binary built with the Zig compiler: a project folder holds the posts, the templates and a `makko.json` file, and running `makko .` writes the finished site into an output folder that any HTML host can serve. The [English documentation](https://makko.starlightnet.work/english.html) describes the setup and the feeds it writes, and the project is maintained by The Starlight Network on its own Forgejo instance.

## Worth knowing

The documentation says Makko is designed primarily for blogs and does not support fully custom templates beyond the post and feed templates. It also says the built-in server is not meant for production, so the site goes to a separate host.
