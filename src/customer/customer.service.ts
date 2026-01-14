import { Injectable } from "@nestjs/common";
import { CacheStoreService } from "src/cache-store/cacheStore.service";

@Injectable()
export class CustomerService {

    constructor( private cacheStore : CacheStoreService) {
        cacheStore.checkInitilize("customer");
        cacheStore.getStoreNameAndType();
    }
}