const msgs = require('../helper/Messages');

class GuildedMessage {
    constructor(authToken, messageData) {
        if (messageData.id) {
            this.id = messageData.id;
        } else {
            this.id = null;
        };
        if (messageData.type) {
            this.type = messageData.type;
        } else {
            this.type = 'default';
        };
        if (messageData.serverId) {
            this.serverId = messageData.serverId;
            this.server = {
                id: messageData.serverId,
            };
        } else {
            this.serverId = null;
            this.server = null;
        };
        if (messageData.channelId) {
            this.channelId = messageData.channelId;
            this.channel = {
                id: messageData.channelId,
                send: (content, options = {}) => msgs.sendMessage(content, messageData.channelId, authToken, options.isPrivate ? options.isPrivate : false, options.isSilent ? options.isSilent : false, options.replyIds ? options.replyIds : null),
            };
        } else {
            this.channelId = null;
            this.channel = null;
        }
        if (messageData.content) {
            this.content = messageData.content;
        } else {
            this.content = null;
        }
        if (messageData.replyMessageIds) {
            this.hasReplies = true;
            this.replyIds = messageData.replyMessageIds;
        } else {
            this.hasReplies = false;
            this.replyIds = null;
        };
        if (messageData.isPrivate) {
            this.private = true;
        } else {
            this.private = false;
        }
        if (messageData.createdAt) {
            this.createdAt = messageData.createdAt;
        } else {
            this.createdAt = null;
        }
        if (messageData.createdBy) {
            this.author = {
                id: messageData.createdBy,
            };
        } else {
            this.author = null;
        }
        if (messageData.createdByWebhookId) {
            this.isWebhook = true;
            this.webhookId = messageData.createdByWebhookId;
        } else {
            this.isWebhook = false;
            this.webhookId = null;
        }
        if (messageData.updatedAt) {
            this.isEdited = true;
            this.editedAt = messageData.updatedAt;
        } else {
            this.isEdited = false;
            this.editedAt = null;
        }
        if (messageData.deletedAt) {
            this.deleted = true;
            this.deletedAt = messageData.deletedAt;
        } else {
            this.deleted = false;
            this.deletedAt = null;
        }
    }
}

module.exports.GuildedMessage = GuildedMessage;