Emotion is a CSS-in-JS library: styles are written in JavaScript, as strings or objects, and turned into class names. The introduction page describes two ways to use it. The @emotion/css package is framework agnostic and needs no additional setup, babel plugin or other configuration change. The @emotion/react package is for React and adds a css prop and theming, and @emotion/styled adds a styled API for React components.

## Worth knowing

The React package requires React, so it cannot be used without it. Server-side rendering with the framework-agnostic package needs additional work to set up, while the React package renders on the server with zero configuration, according to the introduction page.
