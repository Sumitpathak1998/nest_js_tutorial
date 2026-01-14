import { Module } from "@nestjs/common";
import { CacheStoreService } from "./cacheStore.service";

const STORE_OPTIONS = "constant";
const DEFAULT_STORE_NAME = "Default-cache";
const DEFAULT_STORE_TYPE = "Default-Type";

@Module({
    providers : [CacheStoreService , 
        {
            provide : STORE_OPTIONS,
            useValue : {
                storeName : DEFAULT_STORE_NAME,
                storeType : DEFAULT_STORE_TYPE
            }
        }
    ],
    exports : [CacheStoreService]
}) 
export class CacheStoreModule {
    constructor() {
        console.log("Cache store module is initilzed");
    }
}
