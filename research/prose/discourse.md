Discourse is a Ruby on Rails application that answers requests in JSON, with an Ember.js app in the browser as its front end. The main data store is PostgreSQL, and Redis is also required. Discourse was founded in 2013. The [install guide](https://github.com/discourse/discourse/blob/main/docs/INSTALL.md) states that the only officially supported installs are Docker based and lists the server requirements. The project also offers official hosting.

## Worth knowing

The install guide says operators run and monitor Sidekiq and Rails processes, so a Discourse site needs a host that keeps long-running processes alive.
