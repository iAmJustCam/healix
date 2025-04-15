# Publishing Guide for Healix

This document outlines the process for publishing the Healix CLI tool to npm.

## Prerequisites

1. You need an npm account with appropriate permissions to publish to the `healix` package
2. You need to be logged in to npm with `npm login`
3. Ensure you have the latest code from the GitHub repository

## Publishing Process

### 1. Using the Simplified Publish Method

For the initial release, we're using a simplified package.json to make the package more lightweight:

```bash
# Navigate to the repository 
cd /Users/cameroncatri/Desktop/healer

# Use the simplified package.json for publication
cp package.publish.json temp-package.json
mv package.json package.json.bak
mv temp-package.json package.json

# Publish to npm
npm publish --access public

# Restore original package.json
mv package.json.bak package.json
```

### 2. Prepare for Future Releases

For future releases, update the version in package.publish.json:

```bash
# Edit the version number in package.publish.json before publishing
```

### 3. Verify the Published Package

After publishing, verify the package works correctly:

```bash
# Create a temporary directory
mkdir /tmp/test-healix && cd /tmp/test-healix

# Run the CLI directly using npx
npx healix --help

# Or install globally and test
npm install -g healix
healix --help
```

## Troubleshooting

If you encounter publishing issues:

1. Check that you're logged in to npm with the correct account

   ```bash
   npm whoami
   ```

2. Verify that the version you're trying to publish is unique

   ```bash
   npm view healix versions
   ```

3. Ensure the package.json and CLI entry points are correctly configured

4. If the package was published with errors, you can unpublish within 72 hours:
   ```bash
   npm unpublish healix@x.x.x
   ```

## Automated CI/CD (Future Enhancement)

In the future, we can set up GitHub Actions to automatically publish to npm when new releases are created in GitHub.
