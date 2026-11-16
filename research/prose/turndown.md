Turndown reads HTML and writes Markdown, and takes either an HTML string or a DOM node as input. The demo page says it aims to be CommonMark compliant, and options cover heading style, bullet markers, code block fences, emphasis and link style.

Rules decide how each element converts. Added rules take precedence over the CommonMark rules, `keep` and `remove` filters choose which elements stay as HTML or disappear, and plugins bundle several rules together. The [online demo](https://mixmark-io.github.io/turndown/) shows a conversion on the project's own page.

## Worth knowing

Turndown escapes Markdown characters in text with backslashes, using a group of regular expressions. The README says the resulting escaping rules can be quite aggressive, and a developer who is confident in the escaping can override the escape method.
