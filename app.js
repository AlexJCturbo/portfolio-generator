const inquirer = require('inquirer');

inquirer
  .prompt([
    //question object
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
    }
  ])
  //The answer object is returned as a Promise
  .then((answers) => console.log(answers))
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



  
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(userName, gitHubName);

// fs.writeFile('index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output');
// });

