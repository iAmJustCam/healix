#!/usr/bin/env node

/**
 * Healix CLI
 * 
 * A modern codebase healing system for React 19, Next.js 15, TypeScript 5,
 * Tailwind v4, and Vitest.
 */

// Import the CLI program from the compiled source
try {
  require('../dist/cli/index.js');
} catch (error) {
  console.error('Error starting Healix CLI:', error);
  console.log('Try running: npm run build');
  process.exit(1);
}