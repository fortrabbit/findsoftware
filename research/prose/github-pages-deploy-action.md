GitHub Pages Deploy Action is a GitHub Action that a workflow runs after its build step. It pushes the folder named in its `folder` input to a branch, `gh-pages` by default, which GitHub Pages serves as the site. The action deploys with the repository's own token by default, and a personal access token or an SSH deploy key can be set in its inputs instead. Unless `single-commit` is set, the deployment branch keeps its history, and with `clean` on, the default, files that left the source are removed from it.

## Worth knowing

Without a token or SSH key, the workflow needs read and write permission on the repository token, or `contents: write` in the workflow file. With `single-commit` enabled, existing history on the deployment branch is wiped. The README says the action is developed on Ubuntu, and for a Windows build it suggests moving the built folder to an Ubuntu job through artifacts.
