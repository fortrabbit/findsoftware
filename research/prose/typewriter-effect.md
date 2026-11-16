TypewriterJS types text into a page element one character at a time and deletes it again, running a queue of typed, pasted, deleted and paused steps. The npm package holds the core library and a React component that wraps it, and the component passes its typewriter instance to an init callback so the core API can be called from React code.

Strings that contain HTML tags are added as real elements. The [README](https://github.com/tameemsafi/typewriterjs) says such strings and the cursor option are added with innerHTML, and a parseHTML option turns the parsing off.

## Worth knowing

The package also ships a command line tool that plays the effect in a terminal or records it as a GIF, and that tool needs Node.js 24 or newer. The README says sites and apps that install the package can use any Node.js version.
