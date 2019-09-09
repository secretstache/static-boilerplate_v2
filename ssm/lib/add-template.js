'use strict';

const fs = require('fs');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const del = require('del');
const ssmUtils = require('./utils');
const cwd = process.cwd();
let newComponentName;

function actionsOnError(error, newComponentPath) {
    console.log('\n');
    ssmUtils.ssmSay(chalk.red('Something is gone wrong...'));
    ssmUtils.ssmSay('Please, repost the message and the stack trace of Error to developer tars.builder@gmail.com', true);
    console.error(error.stack);
}

function getNewComponentPath() {
    let newComponentPath = {};
    newComponentPath.js = `${cwd}/src/assets/scripts/layout-builder/templates/`;
    newComponentPath.scss = `${cwd}/src/assets/styles/layout-builder/templates/`;
    newComponentPath.html = `${cwd}/src/partials/layout-builder/templates/`;
  
    return newComponentPath;
}

function isComponentExist(newComponentPath) {
    // Create new component if component with newComponentName is not existed already

    fs.open(`${newComponentPath.js}/${newComponentName}.js`, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return false;
            }

            throw err;  
        }
        
        ssmUtils.ssmSay(chalk.red(`"${newComponentName}.js" already exists.\n`), true);
        return true;
    });

    fs.open(`${newComponentPath.scss}/_${newComponentName}.scss`, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return false;
            }

            throw err;  
        }
        
        ssmUtils.ssmSay(chalk.red(`"${newComponentName}.scss" already exists.\n`), true);
        return true;
    });   
    
    fs.open(`${newComponentPath.html}/${newComponentName}.html`, 'r', (err, fd) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return false;
            }

            throw err;  
        }
        
        ssmUtils.ssmSay(chalk.red(`"${newComponentName}.scss" already exists.\n`), true);
        return true;
    });   
}

/**
 * Generate base files for component. Js, Html and Css file
 * @param {String} newComponentPath Path to new component
 */
function generateBaseFiles(newComponentPath, commandOptions) {
    const newComponentFolder = `${newComponentPath}/${newComponentName}`;
  
    if (!commandOptions.js) {
        fs.appendFileSync(`${newComponentPath.js}/${newComponentName}.js`, '\n');
    }
    if (!commandOptions.scss) {
        fs.appendFileSync(`${newComponentPath.scss}/_${newComponentName}.scss`, '\n');
    }
    if (!commandOptions.html) {
        fs.appendFileSync(`${newComponentPath.html}/${newComponentName}.html`, '\n');
    }
}


function successLog() {
    ssmUtils.ssmSay(chalk.green(`Template "${newComponentName}" has been added.\n`), true);
}


/**
 * Create component with structure based on command options
 * @param {Object} commandOptions Options, which is passed from CLI
 */
function createComponent(commandOptions) {
    // Path to new component. Includes component name
    const newComponentPath = getNewComponentPath();

    if (isComponentExist(newComponentPath)) {
        return;
    }

    let generateStructure = true;

    try {
        generateBaseFiles(newComponentPath, commandOptions);
        
    } catch (generationError) {
        return actionsOnError(generationError, newComponentPath);
    }

    successLog();

}


/**
 * Create component 
 * @param  {String} componentName The name of new component
 * @param  {Object} options       Inquirer options
 */

module.exports = function addTemplate(componentName, options) {
    
    const validateResult = ssmUtils.validateFolderName(componentName);

    // If componentName has depricated symbols, log the error
    if (typeof validateResult === 'string') {
        ssmUtils.ssmSay(chalk.red(validateResult + '\n'), true);
        return;
    }

    newComponentName = componentName;
    const commandOptions = Object.assign({}, options);

    createComponent(commandOptions);
};