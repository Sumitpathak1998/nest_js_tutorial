import { Module } from "@nestjs/common";
import { admin_routes } from "./admin/admin-routes";
import { Job_Routes } from "./job/job-routes";
import { RouterModule } from "@nestjs/core";

const ROUTES = [...Job_Routes, ...admin_routes];

@Module({
    imports : [RouterModule.register(ROUTES)],
    exports : [RouterModule]
})
export class AppRouteModule {}