# Guilded-API.js

> **Guilded-API.js v1.1.0 has officially been released!**
*Yep! And we now introduce many new events! They all are put in our [documentation](https://guildedapi.js.org)!*

> **Registering a bot to Guilded**

Here's some __sample bot code__ to get you started.
Don't know what your doing? Come see our [guide for help](https://guildedapi.js.org/guide)!
Or join our [guilded server](https://guilded.gg/GAW).

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

// For some fun, let's do a reverse :)
// This event listens for when a message is updated/edited.
bot.on('serverMessageUpdate', (message) => {
    // See if the message is "!pong"
    if (message.content === '!pong') {
        // Respond with "Ping!" if it is.
        message.channel.send('Ping!');
    }
});

// We have more events listed in our Documentation!
// https://guildedapi.js.org/events

// This last line is very important, it's the only way your bot will start!
bot.login();
```

## Places
- [Home](/)
- [Events](/events)
- [Guide](/guide)

## Support

Where may you ask for support? Come to our [support guilded server](https://guilded.gg/GAW)!

## Documentation
For more help and usage of this package, come see our [documentation](https://guildedapi.js.org), it gives you details about the whole package!
