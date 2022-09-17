const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const userName = profileDataArgs[0];
// const gitHubName = profileDataArgs[1];

//Assignment Destructuring: assigns elements of an array to variable names in a single expression.
const [userName, gitHubName] = profileDataArgs;


//const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

//const generatePage = () => 'Name: Alex, Github: AlexJCturbo';
//const generatePage = (userName, gitHubName) => `Name: ${userName}, GitHub: ${gitHubName}`;


//console.log(generatePage('Alex', 'AlexJCturbo'));

fs.writeFile('index.html', generatePage(userName, gitHubName), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output');
});
