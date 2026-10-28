React Cosmos renders React UI components outside the app that uses them. Each state of a component is a fixture, defined by a file-system convention. A playground lets a developer browse the fixtures and change their inputs.

The `cosmos` command starts the dev server. The `cosmos-export` command writes a static build of the component library, which the static export page says can be deployed to any static hosting service. The guides cover Vite, Webpack, React Native and Next.js, and the Webpack guide installs the project with npm alongside a plugin.

## Worth knowing

The static export does not have every development feature. The export page says it cannot open the selected fixture in the code editor, but anyone with the export URL can browse fixtures and play with component inputs.
