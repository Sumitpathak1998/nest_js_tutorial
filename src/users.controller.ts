import { Controller, Get, Req , Header, Redirect, Param, Query, Inject } from "@nestjs/common";
import { UserStore } from "./user.store";
import { log } from "node:console";

interface userProfile {
    name : string;
    age : number
}

@Controller('/user')
export class UserController {

    constructor(private store : UserStore , @Inject("DATABASE_NAME") dbname : string , @Inject("event_execute") userP : string){
        console.log(store);
        console.log(dbname);
        console.log(userP);
    }
    
    @Get('/profile')
    @Redirect()
    getProfile(@Req() req) {
        const rm = (Math.random() * 10) + 1;
        console.log(rm);
        
        if(rm > 5) {
            return {
                url : "/user/wallet",
                statusCode : 302
            };
        } else {
            return {
                url : "/user/account",
                statusCode : 302
            };
        }
    }

    @Get("/wallet")
    getWallet() {
        return "user_wallet";
    }

    @Get('/account')
    getAccount() {
        return "This is account";
    }

    @Get('/video') 
    getVideo(@Query() params : userProfile) {
        console.log(params.name , params.age);
        return "Success";
    }
}