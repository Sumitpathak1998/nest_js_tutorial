import { Injectable } from "@nestjs/common";

@Injectable()
export class CacheStoreService {

    checkInitilize(name) {
        console.log("cache-store service is initilazed by "+ name);
    }
}