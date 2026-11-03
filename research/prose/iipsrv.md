IIPImage's iipsrv is a FastCGI image server. A web server passes requests to it, and it cuts very large TIFF, JPEG 2000 and JPEG images into the tiles a viewer asks for. Only compressed views of an image are sent to the viewer, so the full-resolution file does not have to be publicly reachable.

It speaks the IIP, IIIF, Zoomify and DeepZoom APIs. The project names IIPMooViewer, OpenSeaDragon, Mirador and UniversalViewer as viewers that work with it. It writes JPEG, PNG, WebP, AVIF and TIFF output. It is installed from source with autoconf, from distribution packages, from a Windows or macOS archive, or from a Docker image.

## Worth knowing

The server source is licensed under GPL-3.0. The download page also offers a commercial license for use in a commercial product, on request. Optional JPEG 2000 input through Kakadu needs a separate commercial license for the library; OpenJPEG is the open option the README names for the same input.
