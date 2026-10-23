Zas is a static site generator written in Go. It renders Markdown and HTML pages through a shared layout, and the generated site is placed in `.zas/deploy`, which can be uploaded to any static host.

It is installed with go install, and page content runs through Go templates. Multilingual sites are configured with an i18n.yml file in the `.zas` directory. The homepage states that the current source requires Go 1.26 or newer.
