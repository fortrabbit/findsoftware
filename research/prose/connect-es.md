Connect for ECMAScript is the TypeScript side of Connect, a family of libraries for remote procedure calls over HTTP. The core package, @connectrpc/connect, provides the clients and servers for a service schema. Separate packages adapt them for web browsers, for plain Node.js servers, and for the Fastify, Next.js and Express frameworks. The README states that Connect implements gRPC, gRPC-Web and its own protocol.

Schemas are written in Protocol Buffers, and the README names Protobuf-ES as the Protobuf library Connect uses. The Node.js guide installs the packages with npm.

## Worth knowing

The Node.js examples serve requests from a plain HTTP server, which the README says is not fit for production use. The README points to a server plugins guide for Fastify, Next.js and Express.

Node.js support follows the maintained Node.js release lines, and browser support covers baseline browsers from the last 2.5 years.
