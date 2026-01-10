import { Injectable } from "@nestjs/common";

export interface Employee {
    id : number;
    name : string;
    gender : string;
    department : string;
}

@Injectable()
export class EmployeeService {
    private store = new Map<number,Employee>();

    addEmployee(emp : Employee) {
        this.store.set(emp.id,emp);
    }

    getEmployee(id : number) {
        return this.store.get(id);
    }

    getEmployees() {
        const data =  Array.from(this.store).map(([id, emp]) => emp);
        console.log(data);
        return data;
    }

    updateEmployee(id : number , emp : Employee) {
        this.store.set(id,emp);
    }

    deleteEmployee(id : number) {
        this.store.delete(id);
    }
}