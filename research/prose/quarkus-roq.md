Roq is a static site generator for websites and blogs, written in Java and built on Quarkus, with Qute templates. The [getting started guide](https://iamroq.dev/docs/getting-started/) installs its command line tool with JBang and runs a site in development mode on a developer's machine.

`roq generate` writes the finished site to `target/roq` as static files. The [publishing guide](https://iamroq.dev/docs/publishing/) describes a GitHub Action for GitHub Pages, and CI configurations for GitLab Pages and other services that publish the same folder. A [migration guide](https://iamroq.dev/docs/migrating/) covers moving an existing Jekyll or Hugo site. The Roq Quarkus extensions for data, front matter and generation can also be used on their own, as the README states.

## Worth knowing

The published output is plain files, so the live site needs no Java.
