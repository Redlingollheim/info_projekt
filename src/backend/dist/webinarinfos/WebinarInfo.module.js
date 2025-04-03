"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebinarInfoModule = void 0;
const common_1 = require("@nestjs/common");
const WebinarInfo_service_1 = require("./WebinarInfo.service");
const WebinarInfo_controller_1 = require("./WebinarInfo.controller");
const CouchDB_module_1 = require("../CouchDB.module");
let WebinarInfoModule = class WebinarInfoModule {
};
exports.WebinarInfoModule = WebinarInfoModule;
exports.WebinarInfoModule = WebinarInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [CouchDB_module_1.CouchDBModule],
        controllers: [WebinarInfo_controller_1.WebinarInfoController],
        providers: [WebinarInfo_service_1.WebinarInfoService],
    })
], WebinarInfoModule);
//# sourceMappingURL=WebinarInfo.module.js.map