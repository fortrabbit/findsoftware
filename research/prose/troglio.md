Troglio is a Trello Power-Up that turns the cards of a Trello board into content for a website or app. Writers put Markdown or HTML into a card, add structured properties in a TOML-like syntax, and publish the card. Publishing pushes the data to a git repository, which can trigger a build, or to a custom server that stores it and serves it as a JSON API.

Previews open the site in an iframe, so the site's front end must take the new data as it arrives. The README links a starter blog built with Preact and React Static, and a small Express server that stores the data in Nedb.

## Worth knowing

Troglio runs as a service, and it is installed by adding it as a custom Power-Up in the Trello admin interface. The terms describe its use without cost as a trial for a limited time, and the plans page says plans are coming soon. The Power-Up's source code is not in the public repository.
