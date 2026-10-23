Expose is a static site generator for photo essays, written as a Bash script. It runs in the folder that holds the images and videos, reads the text for each image from a text file with the same name, and writes the result to a `_site` directory. Folders become a nested menu.

## Worth knowing

The README lists ImageMagick as a dependency, and FFmpeg for video. The templates use `{{name}}` placeholders that the README describes as a sed regex, so the metadata is limited to simple key and value pairs. The repository has no release and no tag.
