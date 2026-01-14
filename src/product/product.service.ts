import { Injectable } from "@nestjs/common";
import { CacheStoreService } from "src/cache-store/cacheStore.service";

@Injectable()
export class ProductService {

    constructor(private cacheStore : CacheStoreService) {
        cacheStore.checkInitilize("product");
    }
}