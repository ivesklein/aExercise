import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('repair-bay')
export class RepairBayController {
    @Get()
    htmlData(@Res() res: Response): void {
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
