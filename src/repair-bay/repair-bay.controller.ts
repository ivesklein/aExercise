import { Controller, Get, Logger, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('repair-bay')
export class RepairBayController {
    private readonly logger = new Logger(RepairBayController.name);
    
    @Get()
    htmlData(@Res() res: Response): void {
        this.logger.log('htmlData');
        res.send(`<!DOCTYPE html>
<html>
<head>
    <title>Repair</title>
</head>
<body>
<div class="anchor-point">NAV-01</div>
</body>
</html>`);
      }
}
