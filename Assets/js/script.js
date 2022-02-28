const fs = require('fs');
const inquirer = require('inquirer');

const badgeArr = []

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
        choices: [
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open'
        ],
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
        badgeArr.push(response.license)
        let shield = ''
        badgeArr.forEach(ico => {
            let shield = ico
            console.log(ico)
        })
//generated readme
    const readme = 
`<!-- proj name -->
<a name="title"></a>
# ${response.name}

<!-- project shields -->
${shield}

<!-- toc -->
<a name="table-of-contents"></a>
## Table of Contents

- [${response.name}](#title)
- [About ${response.name}](#about-proj)
- [Getting Started](#getting-started)
- [Usage](#Usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact Me](#contact-me)

<!-- about project -->
<a name="about-proj"></a>
## About ${response.name}

${response.description}

<!-- Getting Started -->
<a name="getting-started"></a>
## Getting Started
This is how you can get started using ${response.name} locally. Begin by following these instructions.
### Installation

${response.installation}

<!-- Usage -->
<a name="Usage"></a>
## Usage

${response.usage}

<!-- Testing -->
<a name="testing"></a>
## Testing

${response.testing}

<!-- Contributing -->
<a name="Contributing"></a>
## Contributing

${response.contribute}

script should autogenerate this text depending on user choice

<!-- License -->
<a name="License"></a>
${shield}
## License

${response.license}

<!-- Contact Me -->
<a name="contact-me"></a>
## Contact Me
- [${response.gitHub}](https://github.com/${response.gitHub})
- ${response.eMail}

This readme file was generated using [ReadMe Generator](https://github.com/zortro/readme-generator/)`

        fs.writeFile(`../ReadMe/${response.name}-ReadMe.md`, readme, (err, data) => {
            if (err) {
                throw err
            }
        })
    })