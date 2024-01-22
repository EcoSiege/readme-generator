const fs = require('fs');
const inquirer = require('inquirer');
const licenses = {
    mit: 'http://www.mitbadge.com',

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
            message: 'Enter your projects contruibting guidelines',
            name: 'contruibting'  
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

* [Installation Instructions](#installation-instructions)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing-guidlines)

* [Test information](#test-information)

* [Contact Information](#contact-information)
    
## Installation Instructions

${response.installation}

## Usage

${response.usage}

## License

---

## Contributing guidlines

${response.contributing}

## Test information

${response.test}

## Contact Information

Github: [${response.github}](https://github.com/${response.github})

Linkedin: [${response.linkedin}](https://www.linkedin.com/in/${response.linkedin})
`, (err) =>
    err ? console.error(err) : console.log('Success!'))
    )


