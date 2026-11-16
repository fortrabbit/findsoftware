httpexpect is a testing library for Go that builds HTTP requests and checks their responses through chainable calls. A test sets the path, query, headers, cookies and a JSON, urlencoded or multipart body, then asserts on the status, headers, cookies and payload, including JSON paths and JSON Schema.

The library can talk to a server through a real HTTP client or call the Go handler directly. Failures are reported through the standard testing package or through testify.
