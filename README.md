# Icon
## About
This basic web app is made in express and lets you find icons by searching for the keyword. It is connected to [Noun Project](https://thenounproject.com/) and all the icons are from their awesome collections.
## How to use
To use this app, first make sure you have node.js installed. You can install it from here: [Node.js](https://nodejs.org/en/). Then, navigate to your repository folder and type in **_npm init_** in the terminal to initialize. Then, you will need to install these npm packages: [express](https://www.npmjs.com/package/express), [hbs](https://www.npmjs.com/package/hbs), [body-parser](https://www.npmjs.com/package/body-parser), [oauth](https://www.npmjs.com/package/oauth). You can follow the instruction from those pages, or simply type **_npm install express hbs body-parser oauth_** in the terminal.

After you've done all the installations, it is time to get the API key from Noun Project. Please follow the instruction here [Noun Project Documentation](http://api.thenounproject.com/getting_started.html#creating-an-api-key) to get your key and secure. Once you have that, create a file called **_config.js_** in your folder and type in the following:
>module.exports = {
	key:'_your key here_',
	secret: '_your secret here_'
}

Now, you should be able to run the program by typing **_node app.js_** in your terminal. Then, go to **_localhost:3000/icon_** if you want to search for single icon or **_localhost:3000/collection_** if you are aiming for collection.
