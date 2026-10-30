nghttpx is a reverse proxy for HTTP/3, HTTP/2 and HTTP/1 that ships in the nghttp2 project alongside the nghttp2 library. The [man page](https://nghttp2.org/documentation/nghttpx.1.html) describes its options, and the repository's README explains how to build the application programs from source or from a release tar archive.

## Worth knowing

nghttpx is a long-running server program, so the host has to keep a process running for it. The README advises jemalloc for long-running server programs to limit heap fragmentation.
