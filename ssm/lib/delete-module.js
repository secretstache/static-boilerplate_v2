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


/**
 * Create module 
 * @param  {String} moduleName The name of new module
 * @param  {Object} options       Inquirer options
 */
module.exports = function deletemodule(moduleName) {

    const newmodulePath = getNewmodulePath();


    fs.unlink(`${newmodulePath.js}/${moduleName}.js`, (err) => {

    });

    fs.unlink(`${newmodulePath.scss}/_${moduleName}.scss`, (err) => {

    });

    fs.unlink(`${newmodulePath.html}/${moduleName}.html`, (err) => {

    });

    ssmUtils.ssmSay(chalk.green(`${moduleName} was deleted \n`), true);


};