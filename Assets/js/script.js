const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'name',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your project must have a name!'
            }
        }            
    },
    {
        type: 'checkbox',
        message: 'What shields would you like your ReadMe to have?',
        choices: ['Twitter', 'Facebook', 'LinkedIn'],
        name: 'shieldType'            
    },
    {
        type: 'input',
        message: 'Please enter the url for your logo image:',
        name: 'imgURL',       
    },
    {
        type: 'input',
        message: 'Please give a brief description of your project. "(Project Name) is a: (Your Description)"',
        name: 'about',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your project must have a description!'
            }
        }               
    },
    {
        type: 'input',
        message: 'Please list some features about your project.',
        name: 'feature',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your project must have features!'
            }
        }               
    },
    {
        type: 'input',
        message: 'What frameworks/libraries has your project utilized?',
        name: 'builtWith',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your project must have listed frameworks or utilities!'
            }
        }               
    },
    {
        type: 'input',
        message: 'Please describe how a user will interact with your project.',
        name: 'usage',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your project must have a manual!'
            }
        }               
    },
    ])
    .then(response => {
//name
    let name = response.name
//shields
    let shields =
`- ${response.shieldType}`
//logo
    let logo =
`<!-- project logo -->
<a name="logo"></a>
## logo
![img](${response.imgURL})`
//logoHref
    let logoHref =
`- [${name}](#logo)`
//aboutProj
    let aboutProj =
    response.about
//features
    let features =
    response.feature
//builtWith
    let bWith =
    response.builtWith
//usage
    let use =
    response.usage
//generated readme
    const readme = 
`<a name="title"></a>
# ${name}

<!-- project shields -->
<a name="shields"></a>
## Shields
${shields}

${logo}

<!-- toc -->
<a name="table-of-contents"></a>
## Table of Contents
- [${name}](#title)
- [Shields](#shields)
${logoHref}
- [Table of Contents](#table-of-contents)
- [About ${name}](#about-proj)
- [Built With](#built-with)
- [Usage](#Usage)

<!-- about project -->
<a name="about-proj"></a>
## About ${name}

${name} is a ${aboutProj}
${name} features:
${features}

<!-- built with -->
<a name="built-with"></a>
### Built With
${name} was built with the following frameworks and libraries:
${bWith}

<!-- Usage -->
<a name="Usage"></a>
## Usage

${use}`

        fs.appendFile(`../ReadMe/${response.name}-ReadMe.md`, readme, (err, data) => {
            if (err) {
                throw (err)
            } else shields.forEach(function() {
                console.log('success!')
            })
        })
    })