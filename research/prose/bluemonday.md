bluemonday is an HTML sanitizer for Go. It takes untrusted HTML, such as user generated content, and returns HTML limited to an allowlist of elements and attributes. A Go server builds a policy, either from the two policies the library ships or from its own rules, and applies it to each input. The library is installed with `go get`.

## Worth knowing

The README asks that bluemonday run after any other HTML processing, such as Markdown rendering, so that no unsanitized markup is added later. Script and style elements are dropped unless the policy enables them.
