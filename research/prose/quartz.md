Quartz is a static-site generator that turns a folder of Markdown notes into a website for a digital garden. The source is cloned from its repository and dependencies are installed with npm. `npx quartz create` then runs a setup wizard that picks a template and a base URL. Content lives in the `content` folder, and layouts and page components are written as JSX.

`npx quartz build --serve` runs a local preview. The `public` directory is copied to any host that serves static HTML, and the hosting guide names GitHub Pages, Cloudflare, Netlify and Vercel.

## Worth knowing

The Docker support page says serve mode is intended for local previews only.
