Emoji Mart is an emoji picker for the web, built as a component. The picker shows a searchable grid of emoji with categories, skin tones and custom emoji, and it is available as a React component and as a browser build. Its emoji data is a separate package that the picker either bundles or loads from a CDN. The same data also powers an emoji web component and a search that runs without the picker.

## Worth knowing

The README lists the trade-off for the data. Bundled data renders at once and works offline. Remote data keeps the app bundle small and adds network latency, and offline use then needs a service worker.
