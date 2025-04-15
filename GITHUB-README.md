# Healix

![Project Status: Development](https://img.shields.io/badge/Project%20Status-Development-brightgreen)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**🩺 Healix** is a CLI tool that diagnoses and heals your codebase, keeping it healthy and aligned with modern best practices. It detects issues in React components, hooks, and other code patterns, then intelligently applies fixes.

Specialized in healing modern web development frameworks: React 19, Next.js 15, TypeScript 5, and Tailwind v4.

## ⚡ Quickstart

⚠️ **Coming Soon:** This project is currently in development and will be available on npm soon.

When released:

```bash
npx healix health
```

This checks your project's health from the current directory, providing a comprehensive diagnosis. It skips common folders like `node_modules` and respects `.healignore` if present.

## ✨ Features

- 🔍 **Health diagnosis** from project structure to individual components
- 🧰 **Automatic healing** of detected issues with safety limits
- 🧪 **Test generation** with Vitest for comprehensive coverage
- 🏗️ **Strict architectural validation** for maintainable codebases
- 🧩 **Framework-specific healing** for React, Next.js, TypeScript, and Tailwind
- 📊 **Detailed health reports** with issue summaries
- 🚫 **File exclusion patterns** with `.healignore` support
- 🔄 **CI/CD integration** with GitHub Actions templates

## 📥 Installation Options

### Option 1 – Quick One-Time Check (Recommended for First Use)

```bash
npx healix health
```

### Option 2 – Add to Your Project (Good for CI/CD or teams)

```bash
npm install --save-dev healix
npx healix health
```

_Add scripts to your `package.json`:_
```json
"scripts": {
  "codebase:health": "healix health",
  "codebase:heal": "healix heal --dry-run"
}
```

### Option 3 – Global Install (Power Users)

```bash
npm install -g healix
healix health
```

## 🛠 How It Works

### 1. Start from Current Directory

Healix diagnoses your codebase starting from where you run the command.

### 2. What It Checks by Default

- All `.ts`, `.tsx`, `.js`, and `.jsx` files
- Ignores `node_modules`, `dist`, and other standard folders
- Respects a `.healignore` file (like `.gitignore`)

### 3. Customize What to Diagnose

✅ **Check a specific folder**
```bash
healix health --dir ./src
```

✅ **Use a config file**
```bash
healix health --config healix.config.js
```

Your config file might look like:
```js
module.exports = {
  include: ['src/**/*.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
  exclude: ['**/*.test.ts', '**/generated/**'],
  frameworks: {
    react: '19.0.0',
    nextjs: '15.0.0',
    typescript: '5.0.0',
    tailwind: '4.0.0',
  }
}
```

### 4. Ignore Files You Don't Want to Check

Create a `.healignore` file in your project root:
```
src/generated/**
**/temp.ts
```

## 🔍 Command Reference

### Health Command

```bash
# Basic usage
healix health

# With options
healix health --dir ./src --summary --strict
```

Available options:
- `--dir <path>`: Project directory to check (default: `.`)
- `--summary`: Show condensed summary instead of detailed report
- `--strict`: Enable strict validation mode
- `--report <format>`: Report format: console, json, html (default: console)
- `--save <filename>`: Save report to file
- `--focus <area>`: Focus on specific area (react, nextjs, typescript, tailwind, tests)
- `--config <path>`: Path to configuration file

### Heal Command

```bash
# Preview fixes without applying
healix heal --dry-run

# Apply fixes with safety limit
healix heal --limit 20
```

Available options:
- `--dir <path>`: Project directory to fix (default: `.`)
- `--dry-run`: Preview fixes without making changes
- `--limit <number>`: Maximum number of fixes to apply
- `--focus <area>`: Only fix specific areas
- `--component <name>`: Only fix a specific component
- `--generate-tests`: Generate tests for fixed components
- `--config <path>`: Path to configuration file

## 🔧 What Healix Can Fix

### Component Healing

✅ **File naming convention**: Convert to kebab-case  
✅ **Component naming**: Convert to PascalCase  
✅ **useEffect dependency arrays**: Add proper dependencies  
✅ **"use client" directive**: Add when needed for client components  
✅ **Named exports**: Convert default exports to named exports  
✅ **JSX-aware validation**: Smart detection of valid JSX patterns  

### Example Transformation

Original component with health issues:
```jsx
function userCard(props) {
  useEffect(() => {
    fetch(`/api/users/${props.userId}`)
      .then(res => res.json())
      .then(data => setUserData(data))
  }) // Missing dependency array

  return <div style={{padding: '16px'}}>{props.name}</div>
}

export default userCard
```

Healed component:
```tsx
"use client";

export function UserCard({ userId, name }: UserCardProps) {
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [userId]) // Fixed dependency array

  return <div className="p-4">{name}</div>
}
```

### Coming Soon

We're working on healing more issues across:

- **Next.js 15**: Metadata API, Async Layout APIs, Dynamic Route Segments
- **React 19**: String Refs, FindDOMNode, Use Hook Conditional Usage
- **Tailwind CSS v4**: Logical Properties, Custom Plugin Migration, Deprecated Utility Detection
- **TypeScript 5**: VerbatimModuleSyntax, Satisfies Operator, Type Imports

## 🤖 Using in CI/CD (GitHub Actions)

To automatically check codebase health on pull requests:

```yaml
- name: Check Codebase Health
  run: npx healix health --summary
```

To automatically heal issues:
```yaml
- name: Heal Codebase
  run: npx healix heal
```

For a complete GitHub Actions workflow, see the [healix-ci.yml](.github/workflows/healix-ci.yml) template.

## 🚀 What's Next

We're working on deeper diagnosis and healing capabilities to keep your code healthy and clean. Have feedback? [Open an issue](https://github.com/iAmJustCam/healix/issues) or [contribute to the project](https://github.com/iAmJustCam/healix)!

## 📚 Documentation

For more detailed documentation:

- [Implementation Guide](docs/guides/implementation-guide.md)
- [System Architecture](docs/system-architecture.md)
- [TypeScript Error Prevention](docs/typescript-error-prevention.md)

## Development

```bash
# Clone the repository
git clone https://github.com/iAmJustCam/healix.git

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test
```

## 📄 License

MIT