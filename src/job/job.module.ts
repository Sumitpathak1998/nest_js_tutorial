import { Module } from "@nestjs/common";
import { JobInterviewController } from "./controllers/job.interview.controller";
import { JObAppController } from "./controllers/job.app.controller";
import { JobController } from "./controllers/job.controller";

@Module({
    controllers : [JobController,JobInterviewController,JObAppController],    
})
export class JobModule {
    constructor() {
        console.log("Job Module is initiated");
    }
}