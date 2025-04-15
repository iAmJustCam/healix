#!/usr/bin/env node

/**
 * Healix CLI
 * 
 * A modern codebase healing system for React 19, Next.js 15, TypeScript 5,
 * Tailwind v4, and Vitest.
 */
const { Command } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');

// Create CLI program
const program = new Command();

// Display banner
function displayBanner() {
  console.log(
    chalk.cyan(
      figlet.textSync('Healix', { horizontalLayout: 'full' })
    )
  );
  console.log(chalk.cyan('Modern codebase healing system - v0.1.0\n'));
}

// Main CLI configuration
program
  .name('healix')
  .description('Modern codebase healing system for React 19, Next.js 15, TypeScript 5, and Tailwind v4')
  .version('0.1.0');

// Health command (check without fixing)
program
  .command('health')
  .description('Check the health of your codebase without making changes')
  .option('-d, --dir <directory>', 'Project directory', '.')
  .option('--strict', 'Enable strict validation mode')
  .option('--summary', 'Show summary of health issues instead of detailed report')
  .option('--report <format>', 'Report format: console, json, html')
  .option('--save <filename>', 'Save report to file')
  .option('--focus <area>', 'Focus on specific area (react, nextjs, typescript, tailwind, tests)')
  .option('--config <path>', 'Path to configuration file')
  .action(() => {
    displayBanner();
    console.log(chalk.yellow('⚠️ This is a preview version of Healix.'));
    console.log(chalk.yellow('Full functionality will be available in the next version.'));
    console.log('\nTo learn more, visit: https://github.com/iAmJustCam/healix');
  });

// Heal command (fix issues)
program
  .command('heal')
  .description('Fix detected health issues in your codebase')
  .option('-d, --dir <directory>', 'Project directory', '.')
  .option('--dry-run', 'Preview fixes without making changes')
  .option('--limit <number>', 'Maximum number of fixes to apply')
  .option('--focus <area>', 'Focus on specific areas (react, nextjs, typescript, tailwind, tests)')
  .option('--component <name>', 'Only fix a specific component')
  .option('--generate-tests', 'Generate tests for fixed components')
  .option('--config <path>', 'Path to configuration file')
  .action(() => {
    displayBanner();
    console.log(chalk.yellow('⚠️ This is a preview version of Healix.'));
    console.log(chalk.yellow('Full functionality will be available in the next version.'));
    console.log('\nTo learn more, visit: https://github.com/iAmJustCam/healix');
  });

// Add compatibility aliases for those familiar with the old stack-align format
program
  .command('check')
  .description('[Alias for health] Check the health of your codebase')
  .option('-d, --dir <directory>', 'Project directory', '.')
  .action(() => {
    console.log(chalk.yellow('⚠️ The "check" command is deprecated. Please use "healix health" instead.'));
    program.parseAsync(['health', '--dir', program.opts().dir]);
  });

program
  .command('align')
  .description('[Alias for heal] Fix detected health issues')
  .option('-d, --dir <directory>', 'Project directory', '.')
  .action(() => {
    console.log(chalk.yellow('⚠️ The "align" command is deprecated. Please use "healix heal" instead.'));
    program.parseAsync(['heal', '--dir', program.opts().dir]);
  });

// Display help if no command is provided
if (process.argv.length <= 2) {
  displayBanner();
  program.help();
}

// Parse the CLI arguments
program.parse(process.argv);