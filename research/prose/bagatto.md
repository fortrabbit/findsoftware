Bagatto is a static site generator in which a site is an ordinary Janet module. The module holds a data specification, which loads source files such as Markdown articles and JSON configuration files, and a site specification, which lists each output file with its path and contents. Pages are rendered with the Temple template system. Running `bag index.janet` on the module writes the files, and the [manual](https://bagatto.co/manual) describes its two phases, the data phase and the site phase.

## Worth knowing

The pre-compiled build offered on the [getting page](https://bagatto.co/getting) is labeled experimental. The other install routes there and in the README build from the Janet package manager or the Arch Linux AUR package.
