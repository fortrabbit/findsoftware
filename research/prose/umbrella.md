Umbrella JS is a DOM library with an API modeled on jQuery's. It selects elements and handles events. A site or web app loads it from a CDN with a script tag, adds a downloaded file, or installs it with npm.

The library adds a `handle` method, which attaches an event listener and passes the event to a function, and an `ajax` helper. Some methods, such as `append`, accept more argument types than their jQuery counterparts. The [porting guide](https://github.com/franciscop/umbrella/blob/master/jquery.md) describes the differences for code moved from jQuery, and the library uses native DOM methods underneath.

## Worth knowing

Older browsers sit outside the supported range: the porting guide lists Internet Explorer 10 and earlier, and SVG in Internet Explorer 11, as unsupported.
