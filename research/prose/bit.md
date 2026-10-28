Bit organizes source code into components that can be reused across applications. A developer creates components from templates with the Bit command line, groups them in a workspace, and previews them in the Bit UI that `bit start` runs. The README also describes shell applications, which compose components into an app that `bit run` starts locally.

Components are versioned with `bit tag` and exported with `bit export`, either from the developer's machine or from a CI job. By default, the README says, builds run on Ripple CI, and the built components are then available through standard package managers. The README states that Bit fits monorepos, polyrepos and projects without repositories, and that it comes with development environments for Node.js, React, Angular, Vue, React Native and Next.js.

## Worth knowing

Scopes, the places where components are stored and released, can be hosted on Bit Cloud or on a server the team runs itself, and the README links a guide for the self-hosted case.
