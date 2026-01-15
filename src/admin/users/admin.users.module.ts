import { Module } from "@nestjs/common";
import { TeacherController } from "./controllers/teacher.users.controller";

@Module({
    controllers : [TeacherController]
})
export class UsersModule {}