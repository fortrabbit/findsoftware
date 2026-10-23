Quarkdown is a Markdown-based typesetting system that compiles one source into papers, presentations, knowledge bases and static websites. It writes HTML, PDF, Markdown and plain text. The compiler is written in Kotlin and runs on the JVM, and the release archives bundle a Java runtime.

The HTML target includes a static site export, and anything placed in the project's `public` folder is copied to the output root without processing. The README also describes using Quarkdown from GitHub Actions workflows.

## Worth knowing

PDF export needs a Chromium-family browser, which the install scripts add. The compiler is licensed GPLv3 by default, with its command-line tool and language server under AGPLv3.

The [wiki](https://quarkdown.com/wiki) holds the guides and the CLI reference.
