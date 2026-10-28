s3deploy is a command-line tool, written in Go, that uploads a static website to an Amazon S3 bucket and can invalidate the cache of a CloudFront distribution. It compares the ETag hash of each local file with the object already in the bucket and uploads only the files that changed. The README suggests running it from a continuous integration job, and the same command runs on a developer's machine.

## Worth knowing

CloudFront cache invalidation runs only when a distribution ID is supplied, and the README says the AWS user must then have the access rights that the invalidation needs. The Homebrew install is a cask that needs sudo.
