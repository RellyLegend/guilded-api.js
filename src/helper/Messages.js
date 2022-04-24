const { endpoints } = require('./endpoints');
const fetch = require('node-fetch');

module.exports = new class {
    
    sendMessage(message, channelId, authToken, isPrivate, isSilent, replyIds) {
        return fetch(`${endpoints.CHANNELS_MESSAGES(channelId)}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: message,
                isPrivate: isPrivate ? true : false,
                isSilent: isSilent ? true : false,
            }),
        })
        .then(res => res.json());
    }
};
