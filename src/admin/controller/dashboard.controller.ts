import { Controller, Get } from "@nestjs/common";

// admin/dashboard
@Controller('/dashboard')
export class DashBoardController {

    @Get()
    requestHandler() {
        return "Admin Dashboard Route";
    }
}