import { Controller, Get } from '@nestjs/common';

@Controller('status')
export class StatusController {

    @Get()
    readStatus(){
        return {"damaged_system": "navigation"}
    }

}
