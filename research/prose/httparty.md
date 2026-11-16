HTTParty is a Ruby library for sending HTTP requests and reading their responses. Code calls class methods such as `HTTParty.get`, or includes the HTTParty module in its own class and sets a base URI, so that the class's methods wrap one web API. A response exposes the body, status code, message and headers, and a JSON response is parsed into Ruby hashes and arrays unless the format option suppresses it.

The gem also ships an `httparty` command-line executable that prints a response for inspection and can format it as XML or JSON.

## Worth knowing

When a request sets its own Accept-Encoding header, HTTParty decompresses Brotli, LZW and Zstandard responses only if a separate gem is loaded. The [docs](https://github.com/jnunemaker/httparty/tree/main/docs) name each gem.
