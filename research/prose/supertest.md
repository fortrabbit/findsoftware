SuperTest tests Node.js HTTP servers by sending them requests and asserting on the responses, through a fluent API of request and response assertions. It is built on superagent, which the README names as the library it is driven by.

It is installed as a development dependency from npm. The README says it works with any test framework and shows examples with mocha.

## Worth knowing

An expect() failure inside an end() callback does not throw. The README says the test has to rethrow the error or pass it to done to fail.
