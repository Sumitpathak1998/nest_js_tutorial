import { Body, Controller, Post , Get, Param , Put, Delete} from "@nestjs/common";
import { StudentDTO } from "./dto";
import { UserStore } from "./user.store";

let Users : StudentDTO[] = [];

@Controller('/student')
export class StudentController {

    constructor(store : UserStore) {
        console.log(store.getUser(23));
    }
    // For add the student
    @Post('/add')
    addStudent(@Body() studentDto : StudentDTO) {
        Users.push(studentDto);
        console.log(Users);
        return "Student Added";
    }   

    // Display all the student details 
    @Get() 
    getAllStudent() {
        return Users;
    } 

    @Get('/:id')
    getStudent(@Param('id') parmas : number) {

       let user = Users.find((val) => val.id == parmas);
       return user;
    }

    @Put("/update/:id")
    updateStudent(@Param('id') student_id : string , @Body() studentDto : StudentDTO ) {
        let findInd = '';
        for (const key in Users) {
            if(Users[key].id == Number (student_id)) {
                findInd = key;
                break;
            }
        }
        Users[findInd] = studentDto;
        return "Student Updated Successfully";   
    } 

    @Delete('/:id')
    deleteStudnet(@Param('id') student_id : string) {
        Users = Users.filter((user) => user.id != Number (student_id));
        return "Users Deleted successfully";
    }
}
