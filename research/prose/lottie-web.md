Lottie is a JavaScript library that plays Adobe After Effects animations in a web page. The animations arrive as JSON files that the Bodymovin extension exports from an After Effects composition, and the library draws them with the renderer the page asks for: SVG, canvas or HTML, as the [README](https://github.com/airbnb/lottie-web/blob/master/README.md) lists. The repository sits in Airbnb's GitHub organization, and the [documentation site](https://lottie.airbnb.tech/) is linked from the README.

## Worth knowing

Each animation needs its JSON file exported from After Effects with the Bodymovin extension, which the README installs separately from the npm package. The README also says that image sequences, videos and audio are not supported in exported animations.
