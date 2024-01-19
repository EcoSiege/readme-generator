const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your project title.',
            name: 'title'
        }, {
            type: 'input',
            message: 'Enter your project description.',
            name: 'description'
        }, {
            type: 'input',
            message: 'Enter usage information about your project.',
            name: 'usage'
        }, {
            type: 'input',
            message: 'Enter your projects contruibtors',
            name: 'contruibtors'  
        }, {
            type: 'input',
            message: 'Enter your projects test instructions',
            name: 'test'  
        }
    ])

const createREADME = `

` 
