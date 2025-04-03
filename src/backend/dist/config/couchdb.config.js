"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.couchdbconfig = void 0;
exports.couchdbconfig = {
    url: process.env.COUCHDB_URL || 'http://localhost:5984',
    auth: {
        username: process.env.COUCHDB_USER || 'admin',
        password: process.env.COUCHDB_PASSWORD || 'password',
    },
    webinarinfoDbName: 'webinarinfo_db',
};
//# sourceMappingURL=couchdb.config.js.map