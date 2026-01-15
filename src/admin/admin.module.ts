import { Module } from "@nestjs/common";
import { DashBoardController } from "./controller/dashboard.controller";
import { OfficeModule } from "./offices/admin.offices.module";
import { UsersModule } from "./users/admin.users.module";

@Module({
    imports : [OfficeModule,UsersModule],
    controllers : [DashBoardController]
})
export class AdminModule {

}