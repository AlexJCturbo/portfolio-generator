const generatePage = (userName, gitHubName) => {
	return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
  </head>
  
  <body>
      <h1>${userName}</h1>
      <h2><a href="https://github.com/${gitHubName}">Github</a></h2>
  </body>
  </html>
  `;
};

module.exports = generatePage;
/*
module.exports is used at the bottom in the source file that has the functions
we want to make available to other files.
*/