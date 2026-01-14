import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CacheStoreModule } from "src/cache-store/cacheStore.module";

@Module({
    imports : [CacheStoreModule.register({
      storeName : "YT_Product",
      storeType : "YT_Type_Product"
    }),],
    providers : [ProductService]
})
export class ProductModule {
    constructor() {
        console.log("Product module is initilized");
    }
}