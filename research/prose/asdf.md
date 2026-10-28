asdf is a command-line version manager for language runtimes and developer tools, written in Go. Each project lists its tool versions in a .tool-versions file, and asdf also reads .nvmrc, .node-version and .ruby-version files for a smoother migration. Plugins add support for individual runtimes such as Ruby, Node.js and Elixir. It is installed on the developer's machine through Homebrew, Zypper, the Arch User Repository, a pre-compiled binary, go install or git clone, and the project provides a GitHub Action that installs the same .tool-versions file in CI.

## Worth knowing

The getting-started page says asdf primarily requires git, and its dependency lists also name bash.
