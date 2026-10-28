jpegoptim is a command-line program that optimizes JPEG files. Its lossless mode optimizes the Huffman tables of a file, and its lossy mode sets an upper limit on image quality. The [man page](https://raw.githubusercontent.com/tjko/jpegoptim/main/jpegoptim.1) lists the options for each.

By default the program modifies an input file when it is optimized, and the -d option writes the optimized files to another directory instead. Source archives are built with ./configure and make, and the build needs the libjpeg library, which the README lists as version 6b or later.

## Worth knowing

The project has no site of its own. Its description and source archives sit on the maintainer's personal project page, and the source is also on GitHub.
