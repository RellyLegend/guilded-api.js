# Guilded-API.js - Events

## ready
Listens for when the bot is connected to the Guilded Gateway.
```js
<GuildedClient>.on('ready', () => {
    console.log("Logged into Guilded!");
});
```

## serverMessageCreate
Listens for when a new message in a server is created.
```js
<GuildedClient>.on('serverMessageCreate', (message) => {
    // See if the message is "!ping"
    if (message.content === '!ping') {
        // Respond with "Pong!" if it is.
        message.channel.send('Pong!');
    }
});
```

`message` property:

| Property      | Type |
| ----------- | ----------- |
| message      | [GuildedMessage](https://github.com/RellyLegend/guilded-api.js/blob/main/src/classes/GuildedMessage.js) |

## serverMessageUpdate
Listens for when a sent message in a server is edited/updated.
```js
<GuildedClient>.on('serverMessageUpdate', (message) => {
    // See if the message is "!pong"
    if (message.content === '!pong') {
        // Respond with "Ping!" if it is.
        message.channel.send('Ping!');
    }
});
```

## serverMessageDelete
Listens for when a sent message in a server is deleted.
```js
<GuildedClient>.on('serverMessageDelete', (message) => {
    console.log(`User with ID ${message.author.id} deleted a message!`);
});
```

`message` property:

| Property      | Type |
| ----------- | ----------- |
| message      | [GuildedMessage](https://github.com/RellyLegend/guilded-api.js/blob/main/src/classes/GuildedMessage.js) |
