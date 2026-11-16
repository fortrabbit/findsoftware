PMTiles is a single-file archive format for tiled map data, with a JavaScript library that reads it in browsers and Node.js. An archive holds a tile pyramid in one file that can be hosted on a storage platform such as S3, and the reader fetches only the tiles it needs with HTTP range requests. The format is read-only, so an archive is written again in full when its contents change. The [documentation](https://docs.protomaps.com/pmtiles/) describes the archive concepts and how the library works with map libraries such as MapLibre GL JS, Leaflet and OpenLayers.

## Worth knowing

This record covers the format and the library only. The Protomaps project also runs a hosted tile API for its basemap, which is a separate service.
