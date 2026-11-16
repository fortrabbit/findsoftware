Sanitize is a Ruby library that works as an allowlist-based sanitizer for HTML and CSS: it removes whatever elements, attributes and properties are not on the allowlist. The README says it is built on the Nokogiri HTML5 parser and on Crass, a CSS parser.

## Worth knowing

The README warns that Sanitize cannot fully sanitize the contents of math and svg elements, and that it removes them by default.
