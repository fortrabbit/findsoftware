BackstopJS runs visual regression tests on a web app. It loads each scenario in a headless browser, captures screenshots of the page or of selected elements at one or more viewport sizes, and compares them with reference images saved from an earlier run. Differences appear in an HTML report, where a person can approve the new screenshots as the next reference. Scenarios live in a JSON or JavaScript config file, and clicks, hovers and key presses run through Puppeteer or Playwright scripts.

The tool runs on Node.js. It is installed globally with npm for the command line, or locally in a project so that a Node script can call it. The README also describes a Docker image, started with a flag, that renders the tests in a container for consistency across environments. Reference and test images are written to a folder in the project, `backstop_data` by default.

## Worth knowing

The README's News section says BackstopJS needs a new maintainer or owner.
