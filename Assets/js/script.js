const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
/* NAME */
    {
        type: 'input',
        message: 'Enter a name for your project.',
        name: 'name',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your readme must have a name!'
            }
        }            
    },
/* LICENSE */
    {
        type: 'checkbox',
        message: 'What licenses does this project use? (This is non-functional at the moment)',
        choices: ['facebook ', 'twitter ', 'linkedin '],
        name: 'license',

    },
/* DESCRIPTION */
    {
        type: 'input',
        message: 'Enter a brief description of your project starting with the project name.',
        name: 'description',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your readme must have a description!'
            }
        }
    },
/* INSTALLATION */
    {
        type: 'input',
        message: 'Describe to a user how to install your project.',
        name: 'installation',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your readme must have installation instructions!'
            }
        }         
    },
/* USAGE */
    {
        type: 'input',
        message: 'Describe how a user will use your project.',
        name: 'usage',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your project must have a user instructions!'
            }
        }
    },
/* CONTRIBUTION */
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project.',
        name: 'contribution',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your project readme must have contribution guidelines!'
            }
        }               
    },
/* TESTING */
    {
        type: 'input',
        message: 'Describe the process of testing your project.',
        name: 'testing',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your readme must testing instructions!'
            }
        }               
    },
//GITHUB
    {
        type: 'input',
        message: 'Enter your GitHub URL',
        name: 'gitHub',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your readme must have a GitHub URL!'
            }
        }               
    },
//EMAIL
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'eMail',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your readme must have an eMail!'
            }
        }               
    }
    ])
    .then(response => {
//name
    let name =
    response.name
//LicenseShield
    let licenseShield =
    JSON.stringify(`${response.license} ,`)
//description
    let desc =
    response.description
//installation
    let install =
    response.installation
//usage
    let use =
    response.usage
//testing
    let test =
    response.testing
//License
    let license = response.license
//contribution
    let contribute =
    response.contribution
//GitHub
    let gitHub =
    response.gitHub
//eMail
    let eMail = 
    response.eMail
//generated readme
    const readme = 
`<!-- proj name -->
<a name="title"></a>
# ${name}

<!-- project shields -->
${licenseShield}

<!-- toc -->
<a name="table-of-contents"></a>
## Table of Contents

- [${name}](#title)
- [About ${name}](#about-proj)
- [Getting Started](#getting-started)
- [Usage](#Usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact Me](#contact-me)

<!-- about project -->
<a name="about-proj"></a>
## About ${name}

${desc}

<!-- Getting Started -->
<a name="getting-started"></a>
## Getting Started
This is how you can get started using ${name} locally. Begin by following these instructions.
### Installation

${install}

<!-- Usage -->
<a name="Usage"></a>
## Usage

${use}

<!-- Testing -->
<a name="testing"></a>
## Testing

${test}

<!-- Contributing -->
<a name="Contributing"></a>
## Contributing

${contribute}

script should autogenerate this text depending on user choice

<!-- License -->
<a name="License"></a>
## License

${license}

<!-- Contact Me -->
<a name="contact-me"></a>
## Contact Me
- ${gitHub}
- ${eMail}

This readme file was generated using [ReadMe Generator](https://github.com/zortro/readme-generator/)`

        fs.appendFile(`../ReadMe/${response.name}-ReadMe.md`, readme, (err, data) => {
            if (err) {
                throw err
            } else if (response.license === 'facebook') {
                return ('- facebook')
            } else if (response.license === 'twitter') {
                return ('- twitter')
            } else if (response.license === 'linkedin') {
                return ('- linkedin')
            }
        })
    })