import { Controller, Get, Logger } from '@nestjs/common';

@Controller('status')
export class StatusController {
    private readonly logger = new Logger(StatusController.name);

    @Get()
    readStatus(){
        this.logger.log('readStatus');
        return {"damaged_system": "navigation"}
    }

}
