import { Controller, Get } from "@nestjs/common";

@Controller("/job-interview/")
export class JobInterviewController {

    @Get()  
    callJObInterview() {
        return "Call the jobinterview";
    }
}