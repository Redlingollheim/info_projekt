"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const validation_1 = require("./validation");
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.post('/validate', (req, res) => {
    const data = req.body;
    const valid = (0, validation_1.validateUserData)(data);
    if (valid) {
        res.status(200).json({ message: "Valid data", data });
    }
    else {
        res.status(400).json({ message: "Invalid data", errors: validation_1.validateUserData.errors });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map