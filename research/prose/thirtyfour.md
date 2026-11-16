thirtyfour is a Rust crate for automating web browsers through WebDriver and Selenium, so a Rust test can open pages, find elements, send input and check the result. The crate starts a driver for a browser on the local machine as a child process, or creates sessions through a Selenium standalone server or grid, and it adds typed support for the Chrome DevTools Protocol and WebDriver BiDi behind feature flags. It is added to a project through Cargo, and the README's example tests are async Rust functions.

## Worth knowing

A test run needs a supported browser installed on the machine that runs it. The crate downloads a matching webdriver for that browser.
