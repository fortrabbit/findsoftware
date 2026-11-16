Premailer is a Ruby gem that prepares HTML email for delivery. Its [documentation](https://premailer.github.io/premailer/) says that CSS should be inline in HTML email, and the gem moves CSS styles into inline style attributes. It also converts relative paths to absolute ones, checks CSS properties against what email clients support, and can write a plain text version of the HTML. A Ruby application passes it a URL or an HTML string and gets back the HTML with inline styles.

## Worth knowing

Remote stylesheets that resolve to loopback or private addresses are dropped unless the caller allows local network access. CSS variables stay as variable calls in the output, and a separate build step is needed to replace them with their values.
