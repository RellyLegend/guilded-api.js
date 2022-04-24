# Guilded-API.js - Events

## Normal Events

### ready
Listens for when the bot is connected to the Guilded Gateway.
```js
<GuildedClient>.on('ready', () => {
    console.log("Logged into Guilded!");
});
```

## Message Events

### serverMessageCreate
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

### serverMessageUpdate
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

### serverMessageDelete
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

## Member Events

### serverMemberJoin
Listens for when a member joins a server.
```js
<GuildedClient>.on('serverMemberJoin', (member) => {
    console.log('User ${member.user.id} joined ${member.serverId}!');
});
```

### serverMemberLeft
Listens for when a member leaves the server.
```js
<GuildedClient>.on('serverMemberLeave', (member) => {
    console.log('User ${member.user.id} left ${member.serverId}!');
});
```

### serverMemberUpdate
Listens for when a server member's roles, nickname or anything updates.
```js
<GuildedClient>.on('serverMemberUpdate', (member) => {
    console.log(`${member.user.id} updated: ${member.updatedInfo}`);
});
```

| Property      | Type |
| ----------- | ----------- |
| member      | [GuildedServerMember](https://github.com/RellyLegend/guilded-api.js/blob/main/src/classes/user/GuildedServerMember.js) |


### serverMemberBan
Listens for when a server member has been banned.
```js
<GuildedClient>.on('serverMemberBan', (ban) => {
    console.log(`${ban.user.id} was banned by ${ban.bannedBy}`);
});
```

### serverMemberUnban
Listens for when a server member has been unbanned.
```js
<GuildedClient>.on('serverMemberUnban', (ban) => {
    console.log(`${ban.user.id} was unbanned by ${ban.bannedBy}`);
});
```


| Property      | Type |
| ----------- | ----------- |
| ban      | [GuildedServerMemberBan](https://github.com/RellyLegend/guilded-api.js/blob/main/src/classes/user/GuildedServerMemberBan.js) |

## Webhook Events

### serverWebhookCreate
Listens for when a new webhook has been created in a server.
```js
<GuildedClient>.on('serverWebhookCreate', (webhook) => {
    console.log(`A new webhook with ID ${webhook.id} in ${webhook.serverId} has been created!`)
});
```

### serverWebhookUpdate
Listens for when a already-made webhook has been updated.
```js
<GuildedClient>.on('serverWebhookUpdate', (webhook) => {
    console.log(`A webhook with ID ${webhook.id} in ${webhook.serverId} has been updated!`)
    console.log(`New info:`);
    consoe.log(webhook);
});
```

## Other Events

### disconnect
Listens for when the bot has been disconnected from the Guilded Gateway.
```js
<GuildedClient>.on('disconnect', () => {
    console.log(`The bot has logged off from Guilded.`);
});
```


```js
<GuildedClient>.on('error', (error) => {
    console.log(`Error: ${error}`);
});
```
| Property      | Type |
| ----------- | ----------- |
| error      | any |
