Kobweb is a Kotlin framework for websites and web apps, built on top of Compose HTML. The export step takes a snapshot of every page, so a crawler that does not run JavaScript still reads HTML. A site can be exported as a static layout of files for a static hosting provider, or built as a full stack site with a server on a JVM target. The Kobweb command-line tool drives the build through Gradle and is installed with Homebrew, Nix, Scoop, SDKMAN or a binary download. Export runs a headless browser, which it can download on the first export unless a local one is configured.

## Worth knowing

The README says the framework is still pre-1.0. A full stack site needs a server to run, while a static layout site needs only a host that serves files.
