// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![GitHub License]()

  ## Description

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

  

  ## Usage

  ## License

  ## Contributing

  ## Tests

  ## Questions
  For any questions about the project, please contact me at ${data.email} or visit my GithHub profile ${"[" + data.userName + "]" + "(https://github.com/" + data.userName + ")"}

`;
}

module.exports = generateMarkdown;
