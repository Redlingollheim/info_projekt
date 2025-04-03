"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebinarInfo = void 0;
const openapi = require("@nestjs/swagger");
class WebinarInfo {
    constructor(email, name, date) {
        this.email = email;
        this.name = name;
        this.date = date;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, rev: { required: true, type: () => String }, email: { required: true, type: () => String }, name: { required: true, type: () => String }, date: { required: true, type: () => String } };
    }
}
exports.WebinarInfo = WebinarInfo;
//# sourceMappingURL=webinarInfo.entity.js.map