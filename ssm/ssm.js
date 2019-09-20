#!/usr/bin/env node

'use strict';

const program = require('commander');
const fs = require('fs');
const path = require('path');
const cliRootPath = path.resolve(__dirname, '../');
let npmRootPath = path.join(cliRootPath, 'node_modules/');


try {
    fs.statSync(npmRootPath);
} catch (error) {
    npmRootPath = path.resolve(cliRootPath, '../') + path.sep;
}



// // Get root npm directory for global packages and create env-var with it.
process.env.cliRoot = cliRootPath;
process.env.npmRoot = npmRootPath;

program
    .usage('[command] [options] \n         Command without flags will be started in interactive mode.');

program
    .command('create-module <moduleName>')
    .alias('create')
    .description('Add module')
    .option('-j, --js', 'Add module without .js')
    .option('-c, --scss', 'Add module without scss')
    .option('-h, --html', 'Add module without html')
    .action((moduleName, options) => { require('./lib/add-module')(moduleName, options); });

program
    .command('create-template <templateName>')
    .description('Add template')
    .option('-j, --js', 'Add template without .js')
    .option('-c, --scss', 'Add template without scss')
    .option('-h, --html', 'Add template without html')
    .action((templateName, options) => { require('./lib/add-template')(templateName, options); });

program
    .command('remove-module <moduleName>')
    .alias('remove')
    .description('Delete module from modules directory')
    .action((moduleName) => { require('./lib/delete-module')(moduleName); });

program
    .command('remove-template <templateName>')
    .description('Delete template')
    .action((templateName) => { require('./lib/delete-template')(templateName); });

program.parse(process.argv);