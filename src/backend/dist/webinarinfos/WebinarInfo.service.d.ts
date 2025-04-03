import { CouchDBProvider } from '../CouchDB.provider';
import { WebinarInfo } from './entities/webinarInfo.entity';
import { CreateWebinarInfoDto } from './dto/CreateWebinarInfo.dto';
import { UpdateWebinarInfoDto } from './dto/UpdateWebinarInfo.dto';
export declare class WebinarInfoService {
    private readonly couchDBProvider;
    private readonly webinarinfoDb;
    constructor(couchDBProvider: CouchDBProvider);
    findAll(): Promise<WebinarInfo[]>;
    create(createWebinarInfoDto: CreateWebinarInfoDto): Promise<WebinarInfo>;
    findOne(id: string): Promise<WebinarInfo>;
    update(id: string, updateWebinarInfoDto: UpdateWebinarInfoDto): Promise<WebinarInfo>;
    remove(id: string, rev: string): Promise<void>;
}
