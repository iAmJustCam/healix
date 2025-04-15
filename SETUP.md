# Healix CLI Setup

This document describes how to set up and use the Healix CLI tool.

## Building the Project

To build the project, run:

```bash
npm run build
```

This will compile the TypeScript source files into JavaScript in the `dist` directory.

## Using the CLI

After building the project, you can use the CLI in several ways:

### As a Local Dependency

1. Install in your project:

   ```bash
   npm install --save-dev healix
   ```

2. Use with npx:
   ```bash
   npx healix health
   npx healix heal --dry-run
   ```

### As a Global Command

1. Install globally:

   ```bash
   npm install -g healix
   ```

2. Use directly:
   ```bash
   healix health
   healix heal --limit 20
   ```

### For Development

1. Link the package to your global bin:

   ```bash
   npm run link-dev
   ```

2. Use the linked command:

   ```bash
   healix health
   ```

3. Unlink when done:
   ```bash
   npm run unlink-dev
   ```

## Commands

| Command                               | Description                                 |
| ------------------------------------- | ------------------------------------------- |
| `health`                              | Check the health of your codebase           |
| `heal`                                | Fix detected health issues                  |
| `heal --generate-tests`               | Generate tests for fixed components         |
| `health --save file.html --report html` | Save health report to file               |

## Backward Compatibility

For users familiar with the previous "stack-align" commands, we maintain aliases:

| New Command     | Legacy Alias      | Description                   |
| --------------- | ----------------- | ----------------------------- |
| `health`        | `check`           | Check codebase health         |
| `heal`          | `align`           | Fix detected issues           |

## Troubleshooting

If you encounter issues running the CLI:

1. Make sure the project is built:

   ```bash
   npm run build
   ```

2. Check that the bin file is executable:

   ```bash
   chmod +x bin/cli.js
   ```

3. For development, try running the TypeScript source directly:
   ```bash
   npx ts-node src/cli-entry.ts
   ```
