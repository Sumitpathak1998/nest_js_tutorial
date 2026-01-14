import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CacheStoreModule } from "src/cache-store/cacheStore.module";

@Module({
    imports : [CacheStoreModule],
    providers : [CustomerService],
})
export class CustomerModule {}