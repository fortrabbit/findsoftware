Robyn is a Python web framework that merges Python's async capabilities with a Rust runtime, as its [homepage](https://robyn.tech) states. An application is written in Python and starts its own server from code, which then answers requests on the port the code names. Jinja2 templating and Pydantic validation are optional extras of the pip package.

## Worth knowing

The server is a process the application starts itself, so a host has to keep that process running.
