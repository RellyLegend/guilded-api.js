# Guilded-API.js - Guide
> Welcome! Here, if your a begineer, you can know how to get started with making a Guilded Bot.

## Auth Token
First off, we need our auth token!

_#1_ You can start by going to [Guilded](https://guilded.gg), make sure you are logged on!

_#2_ Now, select one of your servers you own from your sidebar (or bottom-bar if you set it like that), go to: Settings > Bots.

_#3_ **Create a bot** if you haven't already, or you can manage one you've made.

_#4_ Click on the 3 dots in the right side of your screen, and click `Manage auth tokens`!

_#5_ Generate a new token, and copy it, we'll need it!

## Workspace

_#1_ Get your favourite IDE, create a folder/workspace for your bot.

_#2_ Open a terminal, and run the command `npm init -y` (if you already know what you need to do, you can skip to **step 4**)

_#3_ After it's done, now run `npm install guilded-api.js`, wait for it to install...

_#4_ Now that we have our workspace ready, create a new file named `index.js` in your main directory!


## Time for coding!

Let's get into the fun stuff, Coding our bot!

Here's some sample code, we commented things that might help you understand what's going on. (using `//`)


```js
const Guilded = require('guilded-api.js');
const bot = new Guilded.GuildedClient("Place your token in here.");

// Listen for the Ready Event.
bot.on('ready', () => {
    // Alert us in the terminal/console that the bot has successfully started up!
    console.log(`Successfully connected to Guilded!`);
});

// Let's make ourselves an event for listening to messages!
bot.on('serverMessageCreate', (message) => {
    // See if the message is "!ping"
    if (message.content === '!ping') {
        // Respond with "Pong!" if it is.
        message.channel.send('Pong!');
    }
});

bot.login();
```


You are now ready to use our package, come see other things in the [main page](https://guildedapi.js.org)!
