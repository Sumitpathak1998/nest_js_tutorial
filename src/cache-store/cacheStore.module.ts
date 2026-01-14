import { DynamicModule, Module } from "@nestjs/common";
import { CacheStoreService } from "./cacheStore.service";

const DEFAULT_STORE_NAME = "Default-cache";
const DEFAULT_STORE_TYPE = "Default-Type";

@Module({
    providers : [CacheStoreService , 
        {
            provide : "store_options",
            useValue : {
                storeName : DEFAULT_STORE_NAME,
                storeType : DEFAULT_STORE_TYPE
            }
        }
    ],
    exports : [CacheStoreService]
}) 
export class CacheStoreModule {
    
    static register(option : any) : DynamicModule  {

        let store_option = {
            storeName : DEFAULT_STORE_NAME,
            storeType : DEFAULT_STORE_TYPE
        };

        if(Object.keys(option).length > 0) {
            store_option = option;
        }

        return {
            module : CacheStoreModule,
            providers : [{
                    provide : "store_options",
                    useValue : store_option
                }
            ]
        }
    }
}
