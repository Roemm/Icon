# Icon
## About
This basic web app is made in express and lets you find icons by searching for the keyword. It is connected to [Noun Project](https://thenounproject.com/) and all the icons are from their awasome collections.
## How to use
To use this app, make sure to install these npm packages: [express](https://www.npmjs.com/package/express), []
This bot was created in node.js and used two package--[twit](https://www.npmjs.com/package/twit) and [rita](https://www.npmjs.com/package/rita). So make sure you have them installed before you run it.

Also, make sure to create a config file with your twitter API keys and link it to the app.js file.

Right now, the bot will post every 50 seconds. You can change it to any time you wish. Also, you can set the titles on your own.

## Known bugs
* Since the twitter's language filter is not very accurate, the search result can sometimes include other language.

* Rita package cannot analyze non-word, so if the tweets includes non-word, like hashtags consisting of multiple words or typo or just random letters (as tweets always do), the result may not be very poetical.

* Twitter divedes their search API to three tiers--Standard, Premium and Enterprise. Based on the account you have right now, the results you get may differ. For Standard tier, it returns datas within 7 days, so the result you get can be limited and repeating itself. 
