ngx-bootstrap provides Bootstrap components as Angular components, so an Angular project does not need the original Bootstrap JavaScript components. It is installed from npm as ngx-bootstrap, with the Angular CLI command or a plain npm install, and each component is imported from its own entry point, such as the tooltip module. The Bootstrap stylesheet is added to the project separately, and the README describes a setTheme call for projects where the Bootstrap version cannot be detected automatically. The source is maintained by Valor Software on GitHub.

## Worth knowing

Version 22 requires zoneless change detection, and the README states that zone.js is no longer supported. Projects on older Angular majors use the version that matches them, as the README's compatibility table shows.
