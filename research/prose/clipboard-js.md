clipboard.js copies text to the clipboard when a user clicks an element. The text can come from a data attribute, from the value or text of another element, or from a function that returns a string or a node. A cut action removes the text from an input or textarea instead. The library attaches one listener through event delegation and fires success and error events for the page to respond to. It includes no CSS or tooltip; the README suggests showing the feedback in the page.

## Worth knowing

Copying depends on the Selection and execCommand browser APIs. The README says the library degrades for older browsers, where the page should tell the visitor to press the keyboard shortcut, because the text is already selected.
