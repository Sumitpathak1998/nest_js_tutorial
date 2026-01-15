import { Controller, Get } from "@nestjs/common";

@Controller('/job-application/')
export class JObAppController {

    @Get("") 
    callJobApp() {
        return "JOb Application method is call";    
    }
}   