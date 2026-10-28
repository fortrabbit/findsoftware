glyphhanger is a command-line tool that reads a web page or a local file and lists the characters its text uses as a Unicode range. With `--subset`, it writes smaller copies of font files that keep only those characters, in TTF, WOFF or WOFF2 format. With `--css`, it also writes a `@font-face` block for the subset files. It can follow local links with a spider, and limit the result to text in one font family or to visible text.

## Worth knowing

Subsetting needs `pyftsubset` from fonttools, which needs Python. By default the page reader runs Puppeteer with headless Chrome; a `--jsdom` mode reads pages without it.
