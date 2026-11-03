webmentiond is a Go server that receives webmentions, stores them in a SQLite database and offers a UI for approving or rejecting them. The site links to the server's receive endpoint from the head of its pages, and a widget script shows the approved mentions on a page, as the [getting-started guide](https://webmentiond.org/getting-started/) describes. The server runs from a Docker image, which the install page names as the default way to run it, or from a binary built from source.

The admin UI signs in with an e-mail link sent through an SMTP server, and the addresses allowed to sign in are set when the server starts. Approval can be automated for sources whose URL matches a pattern in the [policies](https://webmentiond.org/policies/) table; policies cannot be configured through the UI yet.

## Worth knowing

The server needs an SMTP account to send the sign-in e-mail, and write access to the SQLite file and the folder that holds it. A source build needs Go and Node. The repository's Dockerfile says it is no longer maintained, and the image is built by a script in the repository instead.
