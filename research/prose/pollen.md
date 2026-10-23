Pollen is a publishing system built on top of Scribble and Racket, aimed at web-based books. A document embeds Racket code in a text-based syntax, and the same source can produce output for more than one format. The [documentation](https://docs.racket-lang.org/pollen/) says projects generally compile down to a set of static files. The built-in project web server is a development and previewing tool and is not needed to deploy.

The project is developed on GitLab, and the [repository](https://gitlab.com/mbutterick/pollen) is the main one; a GitHub copy mirrors it. Pollen is installed with `raco pkg install pollen` on top of Racket, and `raco pollen render` renders source files.

## Worth knowing

The README says the project is actively developed, though the pace has slowed. Its author uses it to publish his own web-based books, which the README names.
