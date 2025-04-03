import * as nano from 'nano';
export declare class CouchDBProvider {
    private readonly nanoInstance;
    getDbInstance(dataBaseName: string): nano.DocumentScope<any>;
}
