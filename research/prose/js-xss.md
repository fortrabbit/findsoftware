js-xss sanitizes untrusted HTML against a whitelist of tags and attributes to prevent cross-site scripting. The site documents its use on Node.js and in the browser, and a command-line tool for processing files.

## Worth knowing

When the whitelist allows the `style` attribute, its value is processed by the separate cssfilter module, which has its own default whitelist.
