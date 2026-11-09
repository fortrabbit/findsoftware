hls.js is a JavaScript library for playing HTTP Live Streaming video in a web page. It streams VOD, live and Low-Latency HLS assets and is written in TypeScript. A page loads it with a script tag or installs it from npm, and the [API docs](https://github.com/video-dev/hls.js/blob/master/docs/API.md) cover its use.

## Worth knowing

The library runs in the page, not in Node.js: requiring it in Node.js loads a placeholder export, and no player can be created there. Its copyright line names Dailymotion, and the repository is hosted under the video-dev GitHub organization.
