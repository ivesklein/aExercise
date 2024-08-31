import { Controller, Logger, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('teapot')
export class TeapotController {
    private readonly logger = new Logger(TeapotController.name);

    @Post()
    makeATea(@Res() res: Response): void {
      this.logger.log('makeATea');
      res.status(418).send('Do you like roiboos?');
    }
}
