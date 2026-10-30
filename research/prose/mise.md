mise is a command-line tool, written in Rust, that installs the tools a project uses, sets its environment variables and runs its tasks. A project keeps those settings in a mise.toml file, which the shell, the editor and CI read. The tools come from a registry of installable tools or from backends such as GitHub releases, Cargo, npm and PyPI. It reads asdf's .tool-versions files and can run asdf plugins, and a project using direnv can move its environment lines into mise.toml. It installs through a shell script, Homebrew and other package managers, Docker images or Cargo.

## Worth knowing

mise is a developer and CI tool, so it belongs on a developer's machine or in a CI job, not on a live site. Running direnv and mise together is unsupported.
