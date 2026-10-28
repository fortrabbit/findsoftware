PostCSS Preset Env is a plugin pack for PostCSS that converts CSS written with newer features into syntax most browsers can read. It takes browser support data from CSSDB, which draws on Can I Use and MDN, and applies only the transformations that a project's browser targets need. It also includes Autoprefixer and shares the same browser list with it.

It is installed from npm and added to the plugin list of a PostCSS build. It runs in all Node environments, and its [README](https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/README.md) is the documentation.

## Worth knowing

Some features need a companion library in the browser. The README says this is because not every behavior can be polyfilled with CSS alone.
