# Guilded-API.js - Events

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

`message` property:

| Property      | Type |
| ----------- | ----------- |
| message      | [GuildedMessage](https://github.com/RellyLegend/guilded-api.js/blob/main/src/classes/GuildedMessage.js) |
