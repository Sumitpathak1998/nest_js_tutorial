import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class CacheStoreService {

    constructor(@Inject("store_options") private option : any) {}

    checkInitilize(name) {
        console.log("cache-store service is initilazed by "+ name);
    }

    getStoreNameAndType() {
        console.log(`Name : ${this.option.storeName}`);
        console.log(`Type : ${this.option.storeType}`);
    }
}