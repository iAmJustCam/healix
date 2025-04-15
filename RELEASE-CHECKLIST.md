# Healix Release Checklist

Use this checklist before each release to ensure everything is ready for publication.

## Pre-Release Checks

### Documentation

- [ ] README.md is up-to-date with the latest features
- [ ] SETUP.md has current installation instructions
- [ ] Command documentation reflects any changes to CLI options
- [ ] Example code in docs is current and works

### Code Quality

- [ ] All tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Build completes successfully (`npm run build`)
- [ ] Manual testing of major features complete

### Version Control

- [ ] All changes are committed to the main branch
- [ ] Git status is clean (no uncommitted changes)
- [ ] Version number in package.publish.json is updated appropriately
      (patch for bugfixes, minor for features, major for breaking changes)
- [ ] Version number in cli.js is updated to match

## Release Process

### Publishing with Simplified Method

- [ ] Ensure you're logged in to npm: `npm whoami`
- [ ] Follow the steps in PUBLISH.md:
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

### Post-Release Verification

- [ ] Install package freshly: `npm install -g healix`
- [ ] Test basic functionality: `healix --help`
- [ ] Test primary commands:
  - [ ] `healix health`
  - [ ] `healix heal --dry-run`

### Announcement (if appropriate)

- [ ] Create release notes on GitHub
- [ ] Notify users through appropriate channels

## Critical Issues to Watch For

- [ ] Ensure CLI can find and execute the main entry point
- [ ] Verify the bin script is executable after installation
- [ ] Check that dependencies are correctly bundled or listed
- [ ] Verify the CLI works properly on both macOS and Linux

## Release Notes Template

```md
# Healix v0.1.0

## 🚀 New Features
- Feature 1
- Feature 2

## 🛠️ Improvements
- Improvement 1
- Improvement 2

## 🐛 Bug Fixes
- Fix 1
- Fix 2

## 📝 Documentation
- Doc update 1
- Doc update 2
```
