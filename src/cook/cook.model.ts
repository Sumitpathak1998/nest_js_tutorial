import { Module } from "@nestjs/common";
import { CookController } from "./controller/cook.controller";
import { CookService } from "./service/cook.service";

@Module({
    controllers : [CookController],
    providers :  [CookService],
})
export class CookModel {}