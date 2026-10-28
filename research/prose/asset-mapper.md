Symfony AssetMapper is the component that the Symfony framework uses to serve application assets without a bundler. It maps directories, such as assets/, to public paths and gives each file a version hash in its name. JavaScript modules load through a browser importmap, so one module can import another or a third-party package without a build step, and a Twig call renders the map into the page.

The component is installed with Composer. In development, the Symfony application returns the versioned URLs itself. Before deployment, the asset-map:compile command writes the final files into public/assets, where the web server serves them directly.

## Worth knowing

The component does not minify assets. The project points to separate bundles for Sass, TypeScript, Tailwind CSS and minification, and to a dedicated bundle for linting.
