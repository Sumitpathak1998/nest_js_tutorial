import { Module } from "@nestjs/common";
import { JobAppModule } from "./job_application/job.app.module";

@Module({
    imports : [JobAppModule],
    exports : [JobAppModule]    
})
export class JobModule {
    constructor() {
        console.log("Job Module is initiated");
    }
}