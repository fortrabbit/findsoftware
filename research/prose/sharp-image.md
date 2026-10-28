sharp is a Node.js module that resizes images and converts them between JPEG, PNG, WebP, AVIF and other formats. It runs in the process that loads it and uses the libvips image library for the pixel work, which the project credits for its speed in resizing.

The package is installed with npm. The install guide describes prebuilt binaries for common platforms, which the package manager selects at install time, and an option to build against a globally installed copy of libvips. Lovell Fuller is named as the package's author.

## Worth knowing

The prebuilt binaries are the default route. A globally installed libvips is used only when it is at least the version the package names, and the install guide says that option is unsupported on Windows and on macOS under Rosetta.
