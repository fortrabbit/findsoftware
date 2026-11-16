Two.js is a drawing API for two-dimensional scenes on the web. The same scene can be drawn by its WebGL, canvas or SVG renderer, because the API sits above the renderer. Shapes and groups are kept in a scenegraph, so an object can be rotated, moved or scaled after it is created, and the library has a built-in animation loop that updates the scene.

Two.js also reads SVG elements from design tools into a scene and loads bitmap images, sprite sheets and image sequences. A headless mode renders a scene on a server with the Node Canvas library and writes the frames to files. The [documentation](https://two.js.org/docs/two/) describes the API.

## Worth knowing

The README says the main import includes every module, so tree shaking is not yet implemented, although the project lists it on its roadmap. A custom build can exclude renderers the project does not need by editing its build script, which reduces the file size.
