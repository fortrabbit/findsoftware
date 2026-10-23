lazyblorg is a blog generator that turns Org-mode files into static HTML5 blog pages. Blog entries can be written anywhere in the Org-mode files, and the tool reads them from there, so the content lives in flat files. The templates are Org-mode files as well.

It is a Python program run from a git clone of the repository or an unpacked ZIP, and uv installs its dependencies. The [README](https://github.com/novoid/lazyblorg/blob/master/README.org) gives the setup steps, which begin with adapting a configuration file and a test run before the first generation. The project is maintained by Karl Voit.

## Worth knowing

The README names Debian GNU/Linux as the development platform, says the tool does not work on native Microsoft Windows and has not been tried on macOS. Each run regenerates all output pages. Its Org-mode parser covers a sub-set of the syntax, with Pandoc as fall-back for other elements.

The README calls lazyblorg a works-for-me project. Features are added when the author uses them, and pull requests for features the author does not use are not accepted.
