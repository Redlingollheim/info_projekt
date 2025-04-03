"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebinarInfoController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CreateWebinarInfo_dto_1 = require("./dto/CreateWebinarInfo.dto");
const UpdateWebinarInfo_dto_1 = require("./dto/UpdateWebinarInfo.dto");
const WebinarInfo_service_1 = require("./WebinarInfo.service");
const webinarInfo_entity_1 = require("./entities/webinarInfo.entity");
let WebinarInfoController = class WebinarInfoController {
    constructor(webinarInfoService) {
        this.webinarInfoService = webinarInfoService;
    }
    getAllWebinarinfos() {
        return this.webinarInfoService.findAll();
    }
    addWebinarInfo(createWebinarInfoDto) {
        return this.webinarInfoService.create(createWebinarInfoDto);
    }
    updateWebinarInfo(id, _rev, updateWebinarInfoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.webinarInfoService.update(id, updateWebinarInfoDto);
        });
    }
    deleteWebinarInfo(id, rev) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.webinarInfoService.remove(id, rev);
        });
    }
};
exports.WebinarInfoController = WebinarInfoController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all webinar infos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retrieve all webinar infos', type: [webinarInfo_entity_1.WebinarInfo] }),
    openapi.ApiResponse({ status: 200, type: [require("./entities/webinarInfo.entity").WebinarInfo] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebinarInfoController.prototype, "getAllWebinarinfos", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new webinar info' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The created webinar info', type: webinarInfo_entity_1.WebinarInfo }),
    openapi.ApiResponse({ status: 201, type: require("./entities/webinarInfo.entity").WebinarInfo }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateWebinarInfo_dto_1.CreateWebinarInfoDto]),
    __metadata("design:returntype", Promise)
], WebinarInfoController.prototype, "addWebinarInfo", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a webinar info by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'ID of the webinar info to update' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The updated webinar info', type: webinarInfo_entity_1.WebinarInfo }),
    (0, swagger_1.ApiQuery)({ name: 'rev', type: String, description: 'Revision of the webinar info' }),
    openapi.ApiResponse({ status: 200, type: require("./entities/webinarInfo.entity").WebinarInfo }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('rev')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, UpdateWebinarInfo_dto_1.UpdateWebinarInfoDto]),
    __metadata("design:returntype", Promise)
], WebinarInfoController.prototype, "updateWebinarInfo", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a webinar info by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'ID of the webinar info to delete' }),
    (0, swagger_1.ApiQuery)({ name: 'rev', type: String, description: 'Revision of the webinar info' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Webinar info successfully deleted' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('rev')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], WebinarInfoController.prototype, "deleteWebinarInfo", null);
exports.WebinarInfoController = WebinarInfoController = __decorate([
    (0, swagger_1.ApiTags)('webinarinfo'),
    (0, common_1.Controller)('webinarinfo'),
    __metadata("design:paramtypes", [WebinarInfo_service_1.WebinarInfoService])
], WebinarInfoController);
//# sourceMappingURL=WebinarInfo.controller.js.map