quickblog is a blog engine for Clojure and babashka, maintained by Michiel Borkent. It is added to a project as a git dependency and driven through tasks: the [quickstart](https://github.com/borkdude/quickblog/blob/main/README.md) adds a task to the project's `bb.edn`, and running `bb quickblog watch` starts an HTTP server that re-renders when files change.

The README states that the same API works from a Clojure project, so a blog can run under either babashka or Clojure. Posts are written in Markdown, and the README keeps a list of blogs built with it.
