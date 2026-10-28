Propshaft is an asset pipeline that Rails applications use to serve their assets. It builds one load path from the asset directories of the app and its gems, so logical asset paths resolve through the usual asset helpers, and it stamps each asset with a digest hash so that the digested files can be cached for a long time.

Precompiling copies the assets into `public/assets`, and a manifest maps logical paths to digested names. In development there is no precompile step, and the assets are served by a development server.

## Worth knowing

Propshaft does not transpile. Its README says it was explicitly not designed to provide full transpiler capabilities, so projects that need transpiling use a separate tool.
