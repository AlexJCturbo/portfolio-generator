# Portfolio Generator, an Introduction to Node.js

This project is a Portfolio Generator built using Node.js and JavaScript. The project is a program that generates an HTML file with the portfolio page. Using inquirer propmts we ask the client for the information to build the portfolio in the command line. Then we save the data in an object. We utilize the object to generate the page using a function that returns the finished HTML template. Then we take this template and using the File System fs.writeFile, we create the final HTML file. Finally, the CSS style is provided by a template that we copy using the fs.copyFile method. The code runs using a chain of Promises that are linked by .then method.


- [GitHub Repository](https://github.com/AlexJCturbo/portfolio-generator).

- [Deployed Link](https://alexjcturbo.github.io/portfolio-generator/).
