"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = void 0;
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const ajv = new ajv_1.default();
(0, ajv_formats_1.default)(ajv);
const schema = {
    type: "object",
    properties: {
        email: { type: "string", format: "email"
        },
        name: {
            type: "string",
            pattern: "^[a-zA-Z\\s-]+$"
        },
        datum: {
            type: "string", format: "date"
        },
    },
    required: ["email", "name", 'datum'],
    additionalProperties: false
};
exports.validateUserData = ajv.compile(schema);
//# sourceMappingURL=validation.js.map