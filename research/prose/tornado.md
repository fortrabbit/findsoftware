Tornado is a Python web framework and asynchronous networking library that runs its own HTTP server rather than working through WSGI. An application defines a `main()` coroutine that starts the server and waits, and the project's guide says an operating system or process manager runs that program. Tornado was originally developed at FriendFeed and ships its own templating language and a locale module for translations.

The guide recommends one process per CPU for multi-core machines, and says a load balancer such as nginx is usually placed in front when each process listens on its own port.

## Worth knowing

Tornado typically runs one thread per process, and its code is not thread-safe, apart from one method the project names as safe to call from other threads. The project says it is designed for Unix-like platforms and that Windows is not officially supported or recommended for production use.
