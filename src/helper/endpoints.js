const baseUrl = "https://www.guilded.gg/api/v1";

module.exports.endpoints = {
    BASE: baseUrl,
    CHANNELS_MESSAGES: (channelId) => `${baseUrl}/channels/${channelId}/messages`,
}
