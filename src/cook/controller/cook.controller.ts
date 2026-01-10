import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CookDto } from "../dto/cookDto";
import { CookService } from "../service/cook.service";

@Controller('/cook')
export class CookController {

    constructor(private cookService : CookService){
        console.log("cook service initiate");
    }

    @Post() 
    addNewCook(@Body() cook : CookDto) {
        this.cookService.addNewCook(cook);
        return "New Cook Added Successfully";
    }

    @Get() 
    fetchAllCook() {
        return this.cookService.fetchAllCookDetails();
    }

    @Get('/:id') 
    fetchCook(@Param('id') cook_id : string) {
        return this.cookService.fetchCook(Number (cook_id));
    }

    @Put("/:id") 
    updateCookDetails(@Param('id') id : string , @Body() cook : CookDto) {
        this.cookService.updateCook(Number (id),cook);
        return "Cook Details Updated Successfully";
    }

    @Delete("/:id") 
    removeCook(@Param('id') id : string) {
        this.cookService.removeCook(Number (id));
        return "Cook Removed";
    }
}