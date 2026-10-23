Coleslaw is a blog generator written in Common Lisp. It keeps posts as files in a git repository and builds a static website from them into a staging directory. The README names Roswell and Quicklisp as ways to install it and says it should run on any conforming Common Lisp implementation, with testing done mainly on SBCL and CCL. The repository is hosted under the coleslaw-org organization on GitHub, and its LICENSE names Brit Butler as the copyright holder.

## Worth knowing

The project has no release or tag, so its activity is dated by the last commit on the default branch. The deploy command moves the staging directory to a deploy directory with rsync by default, and the README lists plugins for hosting via GitHub Pages and Amazon S3.
