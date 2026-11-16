Ky is an HTTP client for JavaScript built on the Fetch API. It adds method shortcuts, a JSON option, timeouts, retries, upload and download progress, a base URL option and hooks, and it can validate responses with Standard Schema validators. Unlike plain fetch, it treats non-2xx status codes as errors after redirects. Instances made with extend or create carry their own defaults.

The README names got and axios as projects Ky differs from, and it says Got is maintained by the same people as Ky.

## Worth knowing

The README notes that Chromium-based browsers retry 408 responses at the network layer for keep-alive connections, so a request can be retried by both the browser and Ky.
