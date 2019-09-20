'use strict';

const fs = require('fs');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const del = require('del');
const ssmUtils = require('./utils');
const cwd = process.cwd();
let newmoduleName;

function actionsOnError(error, newmodulePath) {
    console.log('\n');
    ssmUtils.ssmSay(chalk.red('Something is gone wrong...'));
    ssmUtils.ssmSay('Please, repost the message and the stack trace of Error to developer tars.builder@gmail.com', true);
    console.error(error.stack);
}

function getNewmodulePath() {
    let newmodulePath = {};
    newmodulePath.js = `${cwd}/src/assets/scripts/layout-builder/modules/`;
    newmodulePath.scss = `${cwd}/src/assets/styles/layout-builder/modules/`;
    newmodulePath.html = `${cwd}/src/partials/layout-builder/modules/`;

    return newmodulePath;
}

function ismoduleExist(newmodulePath) {
    // Create new module if module with newmoduleName is not existed already

    fs.open(`${newmodulePath.js}/${newmoduleName}.js`, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return false;
            }

            throw err;
        }

        ssmUtils.ssmSay(chalk.red(`"${newmoduleName}.js" already exists.\n`), true);
        return true;
    });

    fs.open(`${newmodulePath.scss}/_${newmoduleName}.scss`, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return false;
            }

            throw err;
        }

        ssmUtils.ssmSay(chalk.red(`"${newmoduleName}.scss" already exists.\n`), true);
        return true;
    });

    fs.open(`${newmodulePath.html}/${newmoduleName}.html`, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return false;
            }

            throw err;
        }

        ssmUtils.ssmSay(chalk.red(`"${newmoduleName}.scss" already exists.\n`), true);
        return true;
    });
}

/**
 * Generate base files for module. Js, Html and Css file
 * @param {String} newmodulePath Path to new module
 */
function generateBaseFiles(newmodulePath, commandOptions) {
    const newmoduleFolder = `${newmodulePath}/${newmoduleName}`;

    if (!commandOptions.js) {
        fs.appendFileSync(`${newmodulePath.js}/${newmoduleName}.js`, '\n');
    }
    if (!commandOptions.scss) {
        fs.appendFileSync(`${newmodulePath.scss}/_${newmoduleName}.scss`, '\n');
    }
    if (!commandOptions.html) {
        fs.appendFileSync(`${newmodulePath.html}/${newmoduleName}.html`, '\n');
    }
}


function successLog() {
    ssmUtils.ssmSay(chalk.green(`module "${newmoduleName}" has been added.\n`), true);
}


/**
 * Create module with structure based on command options
 * @param {Object} commandOptions Options, which is passed from CLI
 */
function createmodule(commandOptions) {
    // Path to new module. Includes module name
    const newmodulePath = getNewmodulePath();

    if (ismoduleExist(newmodulePath)) {
        return;
    }

    let generateStructure = true;

    try {
        generateBaseFiles(newmodulePath, commandOptions);

    } catch (generationError) {
        return actionsOnError(generationError, newmodulePath);
    }

    successLog();

}


/**
 * Create module 
 * @param  {String} moduleName The name of new module
 * @param  {Object} options       Inquirer options
 */

module.exports = function addmodule(moduleName, options) {

    const validateResult = ssmUtils.validateFolderName(moduleName);

    // If moduleName has depricated symbols, log the error
    if (typeof validateResult === 'string') {
        ssmUtils.ssmSay(chalk.red(validateResult + '\n'), true);
        return;
    }

    newmoduleName = moduleName;
    const commandOptions = Object.assign({}, options);

    createmodule(commandOptions);
};