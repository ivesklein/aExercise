import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('teapot')
export class TeapotController {
    @Post()
    makeATea(@Res() res: Response): void {
      res.status(418).send('Do you like roiboos?');
    }
}
