const Guilded = require('../index');
const client = new Guilded.GuildedClient('your-auth-token');

client.on('ready', () => {
    console.log('Working!');
});

client.on('serverMessageCreate', (message) => {
    const prefix = '!';
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'say') {
        if (!args.join(' ')) {
            return message.channel.send('Nothing.');
        } else {
            return message.channel.send(args.join(' '))
        }
    }
});

client.on('serverMessageUpdate', (message) => {
    if (message.content === 'pong') {
        message.channel.send("Ping!");
    }
});

client.on('serverMessageDelete', (message) => {
    console.log(message)
});

client.on('serverMemberJoin', (member) => {
    console.log(member)
});

client.on('serverMemberLeft', (member) => {
    console.log(member)
});

client.on('serverMemberBan', (member) => {
    console.log(member)
});

client.on('serverMemberUnban', (member) => {
    console.log(member)
});

client.on('serverMemberUpdate', (member) => {
    console.log(member);
});

client.on('serverWebhookCreate', (webhook) => {
    console.log('New Webhook Created:');
    console.log(webhook);
});


client.on('serverWebhookUpdate', (webhook) => {
    console.log('Webhook Updated:');
    console.log(webhook);
});

client.login();
