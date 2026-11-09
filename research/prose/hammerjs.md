Hammer.js attaches gesture recognition to an element on a web page. A page creates a Hammer instance for an element and listens for named events. Press, tap, double tap, horizontal pan and swipe are recognized by default. Pinch and rotate are off by default because they would make the element blocking, and an instance can switch them on. Developers who need their own gestures, such as a triple tap, create a manager, add recognizers to it and subscribe to the event names they define. The [getting-started guide](https://hammerjs.github.io/getting-started/) covers both setups. Hammer recognizes gestures made with touch, mouse and pointer events.

## Worth knowing

The getting-started guide states that the library is in low maintenance mode and that volunteers develop it.
