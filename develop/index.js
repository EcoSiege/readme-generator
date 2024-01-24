const fs = require('fs');
const inquirer = require('inquirer');
const licensesBadge = {
    mit: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    apache: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    boost: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
}
const licenseInfo = {
    mit: 'https://opensource.org/licenses/MIT',
    apache: 'https://opensource.org/licenses/Apache-2.0',
    boost: 'https://www.boost.org/LICENSE_1_0.txt'
}


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
            message: 'Enter your projects contruibting guidelines.',
            name: 'contruibting'  
        }, {
            type: 'input',
            message: 'Enter your projects test instructions.',
            name: 'test'  
        }, {
            type: 'input',
            message: 'Enter your Github username.',
            name: 'github'  
        }, {
            type: 'input',
            message: 'Enter your Email address.',
            name: 'email'  
        }, {
            type: 'list',
            message: 'Select the liscens type you are using.',
            choices: [ 'mit', 'apache', 'boost' ],
            name: 'license'  
        }
    ])
    .then((response) =>
    fs.writeFile('README.md',
`
# ${response.title} ${!['Badge of the chosen license'](licensesBadge[response.license])}

## Table of Contents 

* [Installation Instructions](#installation-instructions)

* [Usage](#usage)

* [License](#license)

* [Contributing Guidlines](#contributing-guidlines)

* [Test Information](#test-information)

* [Questions](#questions)
    
## Installation Instructions

${response.installation}

## Usage

${response.usage}

## License

${licenseInfo[response.license]}

## Contributing Guidlines

${response.contributing}

## Test Information

${response.test}

## Questions

If you have qustions about this project contact me at:

Github: [${response.github}](https://github.com/${response.github})

Linkedin: [${response.email}](${response.email})
`, (err) =>
    err ? console.error(err) : console.log('Success!'))
    )


