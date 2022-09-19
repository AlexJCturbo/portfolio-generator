//require methods to get the different modules
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');


//Function to prompt for user's info
const promptUser = () => {
  return inquirer.prompt([
    {
      typer: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput){
          return true;
        } else{
          console.log('Please enter your name!');
          return false;
        }
      }
    },
		{
			type: 'input',
			name: 'github',
			message: 'Enter your GitHub Username:',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub Username!');
          return false;
        }
      }
		},
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
		{
			type: 'input',
			name: 'about',
			message: 'Provide some information about yourself:',
      when: ({confirmAbout}) => confirmAbout
      // {
			// 	if (confirmAbout){
			// 		return true;
			// 	} else {
			// 		return false;
			// 	}
			// }
		}
  ]);
};


//Function to prompt for portfolio's info
const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
  `);

// If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log('Please enter the name of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required):',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please provide a description of the project!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project (Required);',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('Please enter the GitHub link to your project!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  })
}


//MOCK DATA STARTS 
// const mockData = {
//   name: 'Lernantino',
//   github: 'lernantino',
//   confirmAbout: true,
//   about:
//     'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
//   projects: [
//     {
//       name: 'Run Buddy',
//       description:
//         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
//       languages: ['HTML', 'CSS'],
//       link: 'https://github.com/lernantino/run-buddy',
//       feature: true,
//       confirmAddProject: true
//     },
//     {
//       name: 'Taskinator',
//       description:
//         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
//       languages: ['JavaScript', 'HTML', 'CSS'],
//       link: 'https://github.com/lernantino/taskinator',
//       feature: true,
//       confirmAddProject: true
//     },
//     {
//       name: 'Taskmaster Pro',
//       description:
//         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
//       languages: ['JavaScript', 'jQuery', 'CSS', 'HTML', 'Bootstrap'],
//       link: 'https://github.com/lernantino/taskmaster-pro',
//       feature: false,
//       confirmAddProject: true
//     },
//     {
//       name: 'Robot Gladiators',
//       description:
//         'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
//       languages: ['JavaScript'],
//       link: 'https://github.com/lernantino/robot-gladiators',
//       feature: false,
//       confirmAddProject: false
//     }
//   ]
// };

// const pageHTML = generatePage(mockData);

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);
    
    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Portfolio complete! Check out index.html to see the output!');

      fs.copyFile('./src/style.css', './dist/style.css', (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Style sheet copied successdully!');
      });
    });
  });