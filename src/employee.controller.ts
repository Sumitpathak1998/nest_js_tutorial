import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EmployeeDto } from "./dto";
import {EmployeeService} from "./employee.service";

@Controller("/employee")
export class EmployeeController {
 
    constructor(private employeeService : EmployeeService) {}

    @Post()
    createEmployee(@Body() createEmployeeDto : EmployeeDto) {
        this.employeeService.addEmployee(createEmployeeDto);
        return { message : "Employee Added"};
    }

    @Get()
    findAllEmployee() {
        const data = this.employeeService.getEmployees() 
        console.log(data);
        return data;
    }

    @Get(":id")
    findEmployee(@Param('id') id : number) {
        return this.employeeService.getEmployee(id);
    }
    
    @Put(":id") 
    updateEmployee(@Param('id') id : number , @Body() updateEmp : EmployeeDto) {
        this.employeeService.updateEmployee(id,updateEmp);
        return { message : "Employee Updated"};
    }

    @Delete(":id") 
    deleteUser(@Param('id') id : number) {
        this.employeeService.deleteEmployee(id);
        return { message : "Employee Deleted"};
    }
}