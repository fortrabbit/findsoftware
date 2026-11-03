Pusher Channels is a hosted publish and subscribe API. A server publishes an event to a named channel, and browser or mobile clients subscribed to that channel receive it. Pusher's [Channels documentation](https://pusher.com/docs/channels/) says the service works everywhere because it uses WebSockets and HTTP, and it offers client libraries for web and mobile apps alongside the server libraries.

Clients connect to Pusher's clusters rather than to a server the site runs. Public clusters are placed in nine locations, and dedicated clusters are available on request to some enterprise customers.

## Worth knowing

Pusher is a hosted service with no self-install guide, so a realtime feature depends on Pusher's clusters being available. Single sign-on for the dashboard supports Okta, and the docs state that it is limited to Enterprise plans. The free sandbox plan has per-day message and concurrent connection limits.
