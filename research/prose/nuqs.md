nuqs keeps React state in the URL query string. Its hooks read a query key and return the value with a setter, in the same shape as React's useState, and parsers convert the string to types such as integers, booleans, dates and arrays. An adapter wraps the app for the router in use, and the package offers adapters for Next.js, a React single-page app, Remix, React Router and TanStack Router. Server code can parse the same keys with a loader, and server components can read them from a cache built from the parsers.

## Worth knowing

Parsers do not validate their input, so values that must have a particular shape need a schema library on top. Browsers rate-limit updates to the URL, so changes are queued and throttled, while the state the hook returns updates at once.
