Vizzu is a JavaScript library for animated data visualizations and data stories. Its README describes a generic dataviz engine, written in C++ and compiled to WebAssembly, that generates many types of charts and animates between them, for static charts as well as animated data stories and interactive explorers. A separate page lists external extensions, bindings and templates.

## Worth knowing

The constructor loads the WebAssembly module asynchronously, so any method except animate() throws an exception until initialization has finished.
