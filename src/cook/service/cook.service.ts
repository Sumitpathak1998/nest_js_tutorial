import { log } from "console";
import { CookDto } from "../dto/cookDto";

export class CookService {

    private store = new Map<number,CookDto>();

    addNewCook(cook : CookDto) {
        this.store.set(cook.id,cook);
    }

    fetchAllCookDetails() {
        return Array.from(this.store).map(([id,cook]) => cook);
    }

    fetchCook(id : number) {
        console.log(this.store);
        let data = this.store.get(id); 
        console.log(data);
        return data;
    }

    updateCook(id : number , cook : CookDto) {
        this.store.set(id,cook);
    }

    removeCook(id) {
        this.store.delete(id);
    }
}