premailer-rails is a Ruby gem that inlines CSS into the HTML emails an application sends with ActionMailer. It is an adapter for premailer: the gem registers a delivery hook, so every delivered email is processed, and the stylesheets it links are applied to matching elements through their style attribute. The README says it also works without Rails, for example with sinatra.

## Worth knowing

Linked stylesheets are read from a file under the `public/` folder, through the Rails asset pipeline, or over the network, in an order that can be configured.
