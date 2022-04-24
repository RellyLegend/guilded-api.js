const { GuildedClient } = require('./classes/client/GuildedClient');

const getVersion = () => {
    const package = require('../package.json');
    return package.version;
};

module.exports = {
    GuildedClient,
    getVersion,
};
