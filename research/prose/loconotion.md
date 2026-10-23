loconotion is a Python script that takes the URL of a public Notion.so page, or a TOML configuration file naming one, and generates a static site from the page and its subpages. It automates Google Chrome through ChromeDriver, so Chrome must be installed, and it writes the result to a `dist` folder. It installs with pip or Poetry, and the repository also supplies a Docker setup.

## Worth knowing

The README says the project is functional but unmaintained and may not match Notion's latest site structure, and that issues will likely not be resolved while pull requests are welcome. The source is the Notion page itself, so the page must stay public on Notion while the site is generated.
