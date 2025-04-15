/**
 * Healix Configuration
 * 
 * This is a sample configuration file for Healix.
 * Copy this file to 'healix.config.js' in your project root to customize.
 */

module.exports = {
  // File patterns to include in analysis
  include: [
    'src/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
  ],

  // File patterns to exclude from analysis
  exclude: [
    '**/*.test.{ts,tsx}',
    '**/*.spec.{ts,tsx}',
    '**/node_modules/**',
    '**/dist/**',
    '**/generated/**',
  ],

  // Framework versions to validate against
  frameworks: {
    react: '19.0.0',
    nextjs: '15.0.0',
    typescript: '5.0.0',
    tailwind: '4.0.0',
  },

  // Healing options
  healing: {
    // Maximum number of issues to fix in a single run
    maxFix: 20,
    
    // Whether to generate tests for healed components
    generateTests: true,
    
    // Custom transformations
    transforms: {
      // Convert inline styles to Tailwind classes
      inlineStylesToTailwind: true,
      
      // Convert default exports to named exports
      defaultToNamedExports: true,
      
      // Add proper type annotations
      addTypeAnnotations: true,
    },
  },

  // Validation options
  validation: {
    // Enable strict mode for more thorough checking
    strict: false,
    
    // Focus on specific areas
    focus: [
      'react',
      'nextjs',
      'typescript',
      'tailwind',
      'vitest',
    ],
  },
};