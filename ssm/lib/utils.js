'use strict';

const chalk = require('chalk');
const os = require('os');
const Spinner = require('cli-spinner').Spinner;

const spinner = new Spinner('%s');

/**
 * Check operation system name
 * @return {Boolean} Is OS Windows or not
 */
function isWindows() {
    return (/^win/i).test(os.platform());
}

if (isWindows()) {
    spinner.setSpinnerString('|/-\\');
} else {
    spinner.setSpinnerString('⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏');
}

/**
 * Helper function for spinner, just stop and start spinner
 */
spinner.restart = function restart() {
    this.stop(true);
    this.start();
};

module.exports = {

    /**
     * Output messages from TARS
     * @param  {String}  message Message to output
     * @param  {Boolean} Stopspinner or restart it
     */
    ssmSay(message, stopSpinner) {

        // Restart spinner after every message from TARS
        if (stopSpinner) {
            this.spinner.stop(true);
        } else {
            this.spinner.restart();
        }

        if (os.platform() === 'darwin') {
            console.log(chalk.bold.cyan('SSM : ') + chalk.bold.white(message));
        } else {
            console.log(chalk.bold.cyan('[ SSM ]: ') + chalk.bold.white(message));
        }
    },

    /**
     * Validate folder name
     * @param  {String}                     Value Recieved folder name
     * @return {Boolean || String}          True or error text (not consistent, because of inquirer va)
     */
    validateFolderName(value) {
        const pass = /[?<>:*|"\\]/.test(value);

        if (!pass) {
            return true;
        }

        return 'Symbols \'?<>:*|"\\\' are not allowed. Please, enter a valid folder name!';
    },

    /**
     * Extract only used flags from inquirer options
     * @param  {Object} Inquirer options
     * @return {Array}
     */
    getUsedFlags(inquirerOptions) {
        return Object.keys(inquirerOptions).reduce((result, currentValue) => {
            if (currentValue.indexOf('_') !== 0 && currentValue !== 'options' &&
                currentValue !== 'commands' && currentValue !== 'parent') {
                result.push(currentValue);
            }

            return result;
        }, []);
    },

    spinner,

    /**
     * Determines is current platform windows.
     * @return {boolean}
     */
    isWindows
};
