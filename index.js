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
            message: 'Enter your projects installation insturctions.',
            name: 'installation'
        },  {
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
        }, {
            type: 'input',
            message: 'Enter your Github username',
            name: 'github'  
        }, {
            type: 'input',
            message: 'Enter your Linkedin username',
            name: 'linkedin'  
        }
    ])
    .then((response) =>
    fs.writeFile('README.md',
`
# ${response.title}

## Table of Contents

* Installation Instructions

* Usage

* License

* Contributors

* Tests

* Contact Information
    
## Installation Instructions

${response.installation}

## Usage

${response.usage}

## Liscense

---

## Contributors

${response.contributors}

## Test information

${response.test}

## Contact Information

Github: [${response.github}](https://github.com/${response.github})

Linkedin: [${response.linkedin}](https://www.linkedin.com/in/${response.linkedin})
`, (err) =>
    err ? console.error(err) : console.log('Success!'))
    )


