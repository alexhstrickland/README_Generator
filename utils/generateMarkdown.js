// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const input = license;
  switch(input) {
    case 'ISC':
      response = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
    case 'MIT':
      response = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    case 'BSD 3':
      response = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    case 'GPL 3.0':
      response = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
    case 'Apache 2.0':
      response = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    case 'None':
      response = "";
  }
  return response;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const input = license;
  switch(input) {
    case 'ISC':
      response = "(https://opensource.org/licenses/ISC)";
    case 'MIT':
      response = "(https://opensource.org/licenses/MIT)";
    case 'BSD 3':
      response = "(https://opensource.org/licenses/BSD-3-Clause)";
    case 'GPL 3.0':
      response = "(https://www.gnu.org/licenses/gpl-3.0)";
    case 'Apache 2.0':
      response = "(https://opensource.org/licenses/Apache-2.0)";
    case 'None':
      response = "";
  }
  return response;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license == "") {
    return `## License
  This project is covered under the ${data.license} license. Visit the following link for more information on this license: [${data.license}]${renderLicenseLink(data.license)}`;
  } else {
    return "";
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Description](#Description)
  * [Table of Contents](#Table of Contents)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [Credits](#Credits)

  ## Installation

  To install necessary dependencies, please run the following command:
  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}


  ## Contributing
  ${data.contribution}

  ## Tests
  To test, please run the following command:
  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions
  For any questions about the project, please contact me at ${data.email} or visit my GithHub profile ${"[" + data.userName + "]" + "(https://github.com/" + data.userName + ")"}

`;
}

module.exports = generateMarkdown;
s