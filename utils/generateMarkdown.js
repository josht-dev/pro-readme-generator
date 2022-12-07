// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (license) ? `https://img.shields.io/badge/license-${license}-brightgreen?style=for-the-badge&logo=appveyor` : '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Do some formatting if license present
  if (license) {
    license = license.toLowerCase();
    license = license.replace(' ', '-');
  }
  return (license) ? `https://choosealicense.com/licenses/${license}/` : '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Get the link urls
  const link = renderLicenseLink(license);
  // Return formatted license section of readme
  return (license) ? `## License\n\nThis project is covered under the [${license}](${link}) license.` : '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // variable to hold formatted readme content
  let readme = '';
  // Bare minimum sections
  const bareMin = ['title', 'description', 'installation', 'usage', 'credits'];

  // Only include sections with user data present or are the bare minimum
  for (const key in data) {
    // Check if user input missing
    if (!data[key]) {
      // If section is part of bare minimum, add N/A
      if (bareMin.includes(key)) {
        data[key] = 'N/A';
      } else {
        // Otherwise, skip this iteration of the loop
        continue;
      }
    }

    // Add formatted data to readme
    switch (key) {
      case 'title':
        readme = `# ${data[key].toUpperCase()}`;
        // Add license badges if license is not blank
        if (data.license) {
          readme = readme.concat(
            '\n\n', 
            `[![license](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})`
          );
        }
        break;
      case 'license':
        readme = readme.concat('\n\n', renderLicenseSection(data.license));
        break;
      case 'contents':
        // Add a table of contents with links
        readme = readme.concat(
          '\n\n## Table of Contents\n\n',
          '- [Installation](#installation)\n',
          '- [Usage](#usage)\n',
          '- [Credits](#credits)\n',
          '- [License](#license)'
        );
        // Check for optional content to add links
        if (data.features) {
          readme = readme.concat('\n- [Features](#features)');
        }
        if (data.tests) {
          readme = readme.concat('\n- [Tests](#tests)');
        }
        readme = readme.concat('\n- [Questions](#questions)');
        break;
      case 'username':
        readme = readme.concat(
          '\n\n## Questions\n\n', 
          'For any questions, please reach out to my following contact locations: \n', 
          `![${data[key]}](https://github.com/${data.key})`
        );
        break;
      case 'email':
          readme = readme.concat(`\n${data[key]}`);
        break;
      default:
        readme = readme.concat(`\n\n## ${key}\n\n`, data[key]);
        break;
    }
  }

  // Return formatted readme file
  return readme;
}

module.exports = generateMarkdown;