Cuprite is a Ruby gem with no Selenium, WebDriver or ChromeDriver dependency that lets Capybara tests run against headless Chrome or Chromium. Projects install it with Bundler, as the [documentation](https://docs.rubycdp.com/docs/cuprite/introduction/) describes. Under the hood it uses Ferrum, a high-level Ruby API to the browser over the CDP protocol.

## Worth knowing

A Chrome or Chromium binary has to be installed and reachable through the PATH, the BROWSER_PATH variable or the browser_path option.
