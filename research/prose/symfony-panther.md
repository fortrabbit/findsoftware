Panther is a PHP library for end-to-end tests and web scraping in real browsers. It drives Chrome or Firefox through the W3C WebDriver protocol, so a test can take screenshots, run JavaScript on a page and check real-time features such as WebSockets. Its test case starts the application with the built-in PHP web server and extends PHPUnit's test case, and for a Symfony application it extends the framework's web test case. The library is built on PHP WebDriver.

## Worth knowing

The browsers need a matching ChromeDriver or geckodriver on the machine that runs the tests. The docs have the setup install them with a browser driver installer or the system package manager.
