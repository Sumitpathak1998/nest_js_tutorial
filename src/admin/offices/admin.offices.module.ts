import { Module } from "@nestjs/common";
import { LocationController } from "./controllers/location.offices.controller";

@Module({
    controllers : [LocationController]
})
export class OfficeModule {}