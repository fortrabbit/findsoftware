Glide is a PHP library that produces resized, cropped and filtered copies of images when they are requested. An image link carries its manipulation parameters in the query string, such as a width, a height and a fit mode. The Glide server reads the original from a source file system, writes the result to a cache and returns it. The source and cache can be local directories or Flysystem adapters. The installation page lists adapters for several PHP frameworks, and Composer installs the base library.

## Worth knowing

The GD library is the default image driver, and Imagick or libvips can be selected instead. The simple example leaves out HTTP signatures for brevity and says that securing images matters in production.
