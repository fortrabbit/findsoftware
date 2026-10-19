---
description: "The live site is plain files that any web server, CDN or object storage can serve."
lead: Files only, nothing running.
---

Static files means the software produces HTML, CSS, JavaScript and assets ahead of time, and the live site is only those files. Nothing of the software runs when a visitor requests a page, so the cheapest web space, a CDN or an object storage bucket can serve it. The build itself runs on a developer machine or in CI. A record holds this value when its documentation describes deploying such a build. Hugo, Eleventy and Docusaurus are examples.
