import { AdminModule } from "./admin.module";
import { OfficeModule } from "./offices/admin.offices.module";
import { UsersModule } from "./users/admin.users.module";

export const admin_routes = [{ path : "admin" , module : AdminModule , children : 
    [
      { path : "offices" , module : OfficeModule },
      { path : "users" , module : UsersModule }
    ] 
}];