Liveboat is a static page generator written in Rust that turns RSS reader feed data into a static website. It builds the pages from Handlebars templates into a build directory and writes a JSON API of feed files beside them.

## Worth knowing

The generator runs on a local machine or in CI, and the README describes scheduling it with cron. The static output is what the host serves.
