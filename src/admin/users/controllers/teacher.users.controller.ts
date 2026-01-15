import { Controller, Get } from "@nestjs/common";

// desired : /admin/users/
@Controller("/teacher")
export class TeacherController {

    @Get()
    requestHandler() {
        return "Teacher controller";
    }
}