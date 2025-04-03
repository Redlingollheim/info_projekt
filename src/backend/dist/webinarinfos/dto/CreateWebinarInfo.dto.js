"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWebinarInfoDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateWebinarInfoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String }, name: { required: true, type: () => String }, date: { required: true, type: () => String } };
    }
}
exports.CreateWebinarInfoDto = CreateWebinarInfoDto;
//# sourceMappingURL=CreateWebinarInfo.dto.js.map