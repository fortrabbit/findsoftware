MakeStaticSite is a set of Bash scripts that crawls an existing website with GNU Wget and writes a static copy of it. The copy contains plain HTML, CSS and JavaScript and no server-side scripting or databases, and the scripts can deploy it to Netlify or over rsync. The sites it converts are typically dynamic ones, such as WordPress, and it can also work from sites archived by the Wayback Machine. Paul Trafford created the project, which is licensed under the AGPL.

## Worth knowing

The output is a snapshot. The tool does not run JavaScript, so comments, discussions and surveys lose their interactivity, and the output is not an exact mirror of the original site. The scripts run on a computer the user controls, typically one at home or at work.
