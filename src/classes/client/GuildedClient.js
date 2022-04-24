const EventEmitter = require('events');
const WebSocket = require('ws');
const { GuildedMessage } = require('../GuildedMessage');
const { GuildedServerMember } = require('../user/GuildedServerMember');
const { GuildedServerMemberBan } = require('../user/GuildedServerMemberBan');
const { GuildedWebhook } = require('../webhook/GuildedWebhook');

class GuildedClientWebSocket extends EventEmitter {
    constructor(client) {
        super();

        this.ws = null;
        this.client = client;
        this.connected = false;
    }

    connect() {

        const authToken = this.client.authToken;
        
        this.ws = new WebSocket(`wss://api.guilded.gg/v1/websocket`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });
        
        // Events

        this.ws.on('open', () => {
            this.connected = true;
            this.emit('open');
        });

        this.ws.on('message', (data) => {
            
            const { t: eventType, d: eventData } = JSON.parse(data);
            

            switch (eventType) {
                case 'ChatMessageCreated':
                    this.emit('messageCreated', new GuildedMessage(authToken, eventData.message));
                    break;
                case 'ChatMessageUpdated':
                    this.emit('messageUpdated', new GuildedMessage(authToken, eventData.message));
                    break;
                case 'ChatMessageDeleted':
                    this.emit('messageDeleted', new GuildedMessage(authToken, eventData.message));
                    break;
                case 'TeamMemberJoined':
                    this.emit('memberAdded', new GuildedServerMember(eventData));
                    break;
                case 'TeamMemberRemoved':
                    this.emit('memberRemoved', new GuildedServerMember(eventData));
                    break;
                case 'TeamMemberBanned':
                    this.emit('memberBanned', new GuildedServerMemberBan(eventData));
                    break;
                case 'TeamMemberUnbanned':
                    this.emit('memberUnbanned', new GuildedServerMemberBan(eventData));
                    break;
                case 'TeamMemberUpdated':
                    this.emit('memberUpdated', new GuildedServerMember(eventData));
                    break;
                case 'teamRolesUpdated':
                    this.emit('memberRolesUpdated', new GuildedServerMember(eventData));
                    break;
                case 'TeamWebhookCreated':
                    this.emit('webhookCreated', new GuildedWebhook(eventData));
                    break;
                case 'TeamWebhookUpdated':
                    this.emit('webhookUpdated', new GuildedWebhook(eventData));
                    break;
            };
        });

        this.ws.on('close', () => {
            this.connected = false;
            this.emit('closed');
        });

        this.ws.on('error', (error) => {
            this.emit('error', error);
        });
    }
};

module.exports.GuildedClientWebSocket = GuildedClientWebSocket;
