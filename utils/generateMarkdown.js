// Create a function that returns a license badge based on which license is passed in
// STARTER COMMENT: If there is no license, return an empty string
/* Validation is present in inquirer call, user selects from a list to proceed,
  function is never called without a license present*/
function renderLicenseBadge(license) {
  return (license) ? `https://img.shields.io/badge/license-${license}-brightgreen?style=for-the-badge&logo=appveyor` : '';
}

// Create a function that returns the license link
// STARTER COMMENT: If there is no license, return an empty string
/* Validation is present in inquirer call, user selects from a list to proceed,
  function is never called without a license present*/
function renderLicenseLink(license) {
  return (license) ? `https://choosealicense.com/licenses/${license}/` : '';
}

// Create a function that returns the license section of README
// STARTER COMMENT: If there is no license, return an empty string
/* Validation is present in inquirer call, user selects from a list to proceed,
  function is never called without a license present*/
function renderLicenseSection(license) {
  // Get the link urls
  const link = renderLicenseLink(license);

  // Return formatted license section of readme
  return `## License

    This project is covered under the [${license}](${link}) license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;