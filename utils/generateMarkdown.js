// function to generate markdown for README
const generateMarkdown = (data) => {
    return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ## Description  
  ${data.description}  
  ## Table of Contents  
  * [Description](#Description)  
  * [Installation](#Installation)  
  * [Usage](#Usage)  
  * [Contributing](#Contributing)  
  * [Tests](#Tests)  
  * [Questions](#Questions)  
  * [License](#License)  
  ## Installation  
  ${data.install}  
  ## Usage  
  ${data.usage}  
  ## Contributing  
  ${data.contributing}  
  ## Tests  
  ${data.tests}  
  ## Questions  
  Feel free to send me an email at ${data.email}, or contact me on [Github](https://github.com/${data.githubUser})  
  ## License  
  This project is licensed under the ${data.license} license.  
  © [${data.githubUser}](https://github.com/${data.githubUser})  
  `
  }
  
  module.exports = { generateMarkdown }