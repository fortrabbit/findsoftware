Apache Kvrocks is a distributed key-value NoSQL database written in C++. It stores its data in RocksDB and speaks the Redis protocol, so clients written for Redis connect to it. The getting-started guide names a Docker image and a build from source as the two ways to run it, and the project releases source artifacts only. Once started, the server runs as a long-lived process. The Apache Software Foundation maintains it.

## Worth knowing

The README states an aim to lower the memory cost and raise the capacity compared to Redis, accepts Redis cluster SDKs for its cluster, and points to RedisShake for moving data from Redis. It lists Linux and macOS as supported platforms.
