Linaria is a CSS-in-JS library that writes styles inside JavaScript and extracts them into CSS files during the build, so the page carries no styling code at runtime. It is installed from npm as the @linaria packages with the wyw-in-js Babel preset, and the build needs Node.js. The README says Linaria is now built on top of wyw-in-js, which evaluates the modules at build time. Callstack.io Sp. z o.o., a company seated in Wrocław, Poland, maintains it.

## Worth knowing

Linaria runs when the site is built, so the live site serves the CSS files the build wrote. The README sets a minimum Node.js version for that build. The README's trade-offs say that modules used inside CSS rules cannot have side effects, and that dynamic styles are not supported in the css tag.
