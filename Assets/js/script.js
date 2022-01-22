const fs = require('fs');
const inquirer = require('inquirer');
const { async } = require('rxjs');

inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name'            
    },
    {
        type: 'input',
        message: 'Will your project use shields? y/n',
        validate: async(input) => {
            if (input === 'y') {
            }
        },
        name: 'confirmShields'            
    }
    ])
    .then(response => {
    const name = response.name
    const ynShields = response.confirmShields
    const innerHTML = /* code here in backticks */

        fs.appendFile(`../ReadMe/${response.name}-ReadMe.md`, JSON.stringify(response,null,4), (err, data) => {
            if (err) {
                throw (err)
            } else if (response.validate === true) {
                console.log('success!')
            }
        })
    })