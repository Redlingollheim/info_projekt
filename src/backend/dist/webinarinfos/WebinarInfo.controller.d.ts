import { CreateWebinarInfoDto } from './dto/CreateWebinarInfo.dto';
import { UpdateWebinarInfoDto } from './dto/UpdateWebinarInfo.dto';
import { WebinarInfoService } from './WebinarInfo.service';
import { WebinarInfo } from './entities/webinarInfo.entity';
export declare class WebinarInfoController {
    private readonly webinarInfoService;
    constructor(webinarInfoService: WebinarInfoService);
    getAllWebinarinfos(): Promise<WebinarInfo[]>;
    addWebinarInfo(createWebinarInfoDto: CreateWebinarInfoDto): Promise<WebinarInfo>;
    updateWebinarInfo(id: string, _rev: string, updateWebinarInfoDto: UpdateWebinarInfoDto): Promise<WebinarInfo>;
    deleteWebinarInfo(id: string, rev: string): Promise<void>;
}
