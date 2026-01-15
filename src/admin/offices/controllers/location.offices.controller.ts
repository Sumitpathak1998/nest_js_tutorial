import { Controller, Get } from "@nestjs/common";

// desired routing : /admin/offices/location
@Controller('/location')
export class LocationController {

    @Get()
    requestHandle() {
        return "Location request handler";
    }
}