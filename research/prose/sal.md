Sal is a JavaScript library that animates elements as they scroll into the viewport, using the Intersection Observer API. A page marks each element with a data-sal attribute that names an animation, such as fade or slide-up, and a script calls sal() to start watching those elements. Duration, delay and easing are set with further data attributes, and entering and leaving the viewport fire sal:in and sal:out events.

## Worth knowing

The README calls the Intersection Observer API experimental and suggests a polyfill. Sites that must support visitors without JavaScript should add a noscript block that turns the animation styles off, as the README shows.
