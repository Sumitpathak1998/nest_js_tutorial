import { Controller, Get } from "@nestjs/common";

@Controller("")
export class JobController {

    @Get()
    callMethod () {
        return "Call the Job Application";
    }
}