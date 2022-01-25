const fs = require('fs');
const inquirer = require('inquirer');

//license info
const licenseAuthors = ['- facebook <br>', '- twitter <br>', '- linkedin']
const licenseUrl = ['http://www.facebook.com', 'http://twitter.com', 'http://linkedin.com']
//destructuring license array for return
const [facebook, twitter, linkedin] = licenseAuthors
const [facebookCom, twitterCom, linkedinCom] = licenseUrl
//log
console.log(facebook, twitter, linkedin)
console.log(facebookCom, twitterCom, linkedinCom)
//url variables
let licenseUrl1 = ''
let licenseUrl2 = ''
let licenseUrl3 = ''

inquirer
.prompt([
    //Name prompt
    {
        type: 'input',
        message: 'Enter the name of your repo:',
        name: 'name',
        validate: (value) =>{
            if(value) {
                return true
            } else {
                return 'ERR: Your readme must have a name!'
            }
        }
    },
    //license prompt
    {
        type: 'checkbox',
        message: 'Select the licenses this project uses:',
        choices: licenseAuthors,
        name: 'license'
    }
])
.then(response => {
    if (response.license === licenseAuthors[0]) {
        let licenseURL1 = facebookCom
        console.log(licenseURL1)
    }
    //name
    let name = response.name
    //license
    let licenseName = response.license
    //readme gen
const readme = 
`<!-- proj name -->
<a name="title"></a>
# ${name}

<!-- project shields -->
${licenseUrl1}
${licenseUrl2}
${licenseUrl3}
// WHERE SHIELDS WILL GO

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

//WHERE DESCRIPTION WILL GO

<!-- Getting Started -->
<a name="getting-started"></a>
## Getting Started
This is how you can get started using ${name} locally. Begin by following these instructions.
### Installation

//INSTALL STEP 1
//INSTALL STEP 2
//INSTALL STEP 3

<!-- Usage -->
<a name="Usage"></a>
## Usage

//THIS IS WHERE THE USAGE WILL GO

<!-- Testing -->
<a name="testing"></a>
## Testing

//THIS IS WHERE THE TESTING WILL GO

<!-- Contributing -->
<a name="Contributing"></a>
## Contributing

//THIS IS WHERE THE CONTRIBUTOR SECTION WILL GO

script should autogenerate this text depending on user choice

<!-- License -->
<a name="License"></a>
## License
${licenseName} 

<!-- Contact Me -->
<a name="contact-me"></a>
## Contact Me
//GITHUB WILL GO HERE
//EMAIL WILL GO HERE
`

    fs.appendFile(`../ReadMe/${response.name}-ReadMe.md`, readme, (err, data) => {
        if (err) {
            throw err
        }
    })
})