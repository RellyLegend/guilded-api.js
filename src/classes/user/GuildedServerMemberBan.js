const { GuildedUserSummary } = require('./GuildedUserSummary');

class GuildedServerMemberBan {
    constructor(banData) {
        if (banData.serverMemberBan.user) {
            this.user = new GuildedUserSummary(banData.serverMemberBan.user);
        } else {
            this.user = null;
        }
        if (banData.serverMemberBan.reason) {
            this.reason = banData.serverMemberBan.reason;
        } else {
            this.reason = null;
        }
        if (banData.serverMemberBan.createdAt) {
            this.bannedAt = banData.serverMemberBan.createdAt;
        } else {
            this.bannedAt = null;
        }
        if (banData.serverMemberBan.createdBy) {
            this.bannedBy = banData.serverMemberBan.createdBy;
        }
    }
}

module.exports.GuildedServerMemberBan = GuildedServerMemberBan;