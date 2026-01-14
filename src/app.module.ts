import { Injectable, Module } from '@nestjs/common';
import { UserController} from "./users.controller";
import { StudentController } from './student.controller';
import { UserStore } from './user.store';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { CookModel } from './cook/cook.model';
import { JobModule } from './job/job.module';
import { CacheStoreModule } from './cache-store/cacheStore.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';

const IS_USER_ALLOW = false;

@Injectable() 
class EnvConfig {
  envType : "DEV" | "SIT" | "UAT";

  constructor() {
    this.envType = "DEV";
  }
}

@Module({
  imports : [CookModel,JobModule,CacheStoreModule,ProductModule,CustomerModule],
  controllers: [UserController,StudentController,EmployeeController],
  providers : [
    { provide : UserStore , useClass : UserStore }, 
    { provide : "DATABASE_NAME" , useValue : "exam_portal"},
    { provide : "event_execute" , 
      useFactory : (config : EnvConfig , limit : number = 4) => {
        console.log(limit);
        return (config.envType == "DEV") ? "store the User" : "Event not proccedd";
      },
      inject : [EnvConfig , {token : "limit" , optional : true}]
    },
    EnvConfig,
    { provide : "limit" , useValue : 23},
    EmployeeService
  ],
})
export class AppModule {}

