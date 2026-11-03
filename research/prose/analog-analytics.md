ΛNΛLOG is a self-hosted analytics app that receives named events over HTTP and shows them on a dashboard. Its server is a Node.js process that stores events in MongoDB, PostgreSQL, Redis or SQLite, and the same process can serve the static frontend when `ANALOG_STATIC_SERVER` is set. A site sends an event with a POST request to the `/api/events` endpoint, naming the event in the body, and the dashboard reads the stored data back with a GET request to the same path.

The [README](https://github.com/orangecoloured/analog/blob/main/README.md) covers a local run with npm, a Docker build from the repository's Dockerfile, and deploys to Koyeb, Netlify, Render and Vercel from a copy of the repository. The project keeps its configuration in environment variables, which the README lists in one table.

## Worth knowing

The optional `ANALOG_TOKEN` protects requests, and `ANALOG_PROTECT_POST` extends the protection to POST requests. The README warns that scheduled clean-up on Netlify and Vercel may not run because of runtime limits. The PostgreSQL section asks for a transaction pooler connection. The release line is pre-1.0.
