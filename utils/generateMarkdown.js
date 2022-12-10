// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.replace(/ /g, '_');
  return (license) ? `https://img.shields.io/badge/license-${license}-brightgreen?style=for-the-badge&logo=appveyor` : '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Do some formatting if license present
  if (license) {
    license = license.toLowerCase();
    license = license.replace(/ /g, '-');
    switch (license) {
      case 'gnu-agplv3':
        license = 'agpl-3.0'
      case 'gnu-gplv3':
        license = 'gpl-3.0';
        break;
      case 'gnu-lgplv3':
        license = 'lgpl-3.0';
        break;
      case 'mozilla-public-2.0':
        license = 'mpl-2.0';
        break;
      case 'boost-software-1.0':
        license = 'bsl-1.0';
        break;
      default:
        break;
    }
  }
  return (license) ? `https://choosealicense.com/licenses/${license}/` : '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Get the link urls
  const link = renderLicenseLink(license);
  // Return formatted license section of readme
  return (license) ? `\n\n## License\n\nThis project is covered under the [${license}](${link}) license.` : '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // variable to hold formatted readme content
  let readme = '';
  // Bare minimum sections
  const bareMin = ['description', 'installation', 'usage', 'credits'];
  // Generate license badge
  const licBadge = `[![license](${renderLicenseBadge(data.License)})](${renderLicenseLink(data.License)})`;
  let tableContents = '';

  // TODO - Fix table of contents when required sections are blank
  // Did the user answer 'Y' to a table of contents
  if (data.index) {
    tableContents = '\n\n## Table of Contents\n';
    // Loop through the data obj dynamically adding a table of contents
    for (const i in data) {
      const x = i.toLowerCase();
      // Skip some keys
      if (x === 'title' || x === 'index' || x === 'username' || x === 'email') {
        continue;
      }
      // Check if data present to add to the table of contents
      if (data[i] || bareMin.includes(x)) {
        let link = x.replace(/ /g, '-');
        tableContents = tableContents.concat(`\n- [${i}](#${link})`);
      } else {
        continue;
      }
    }
    // Add questions link
    console.log('contents outside loop');
    tableContents.concat('\n- [Questions](#questions)');
    console.log('post table of contents: ');
    console.log(tableContents);
  }

  // Loop through the data obj adding sections to the readme
  for (const key in data) {
    // Check if this is for the title
    if (key.toLowerCase() === 'title') {
      readme = `# ${data[key].toUpperCase()}\n\n${licBadge}`;
      continue;      
    }
    // Check if value is empty
    if (!data[key]) {
      // Check is this is a required section, otherwise skip
      if (bareMin.includes(key.toLowerCase())) {
        readme = readme.concat(`\n\n## ${key}\n\nN/A`);
        continue;
      } else {
        continue;
      }
    }
    // Add the table of contents if user selected it
    if (key.toLowerCase() === 'index' && data[key]) {
      readme = readme.concat(tableContents);
      continue;
    }
    // TODO - Handle any user inputs with multiple steps

    // Add the License section
    if (key.toLowerCase() === 'license') {
      readme = readme.concat(`${renderLicenseSection(data[key])}`);
      continue;
    }

    // TODO - Fix github link and contact formatting
    // Add the Questions section and skip the email obj key
    if (key.toLowerCase() === 'username') {
      readme = readme.concat(
        '\n\n## Questions\n\n', 
        'For any questions, please reach out to my following contact locations:', 
        `\n![${data[key]}](https://github.com/${data[key]})`, 
        `\n${data.email}`
      ); 
      continue;
    }
    if (key.toLowerCase() === 'email') {continue;}
    
    // Handle all other sections that did not need specific logic
    readme = readme.concat(`\n\n## ${key}\n\n${data[key]}`);
  }

  // Return formatted readme file
  return readme;
}

module.exports = generateMarkdown;

// TODO - Add validation for github username/page