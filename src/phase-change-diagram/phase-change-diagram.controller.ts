import { Controller, Get, Logger, Query } from '@nestjs/common';

@Controller('phase-change-diagram')
export class PhaseChangeDiagramController {
    private readonly logger = new Logger(PhaseChangeDiagramController.name);

    @Get()
    curva(@Query('pressure') pressure: string){
        this.logger.log(`curva ${pressure}`);

        return {
            "specific_volume_liquid": Math.round(calcLiquid(+pressure)*100000000)/100000000,
            "specific_volume_vapor": Math.round(calcVapor(+pressure)*100000000)/100000000
            //"specific_volume_liquid": calcLiquid(+pressure),
            //"specific_volume_vapor": calcVapor(+pressure)
          }
    }
}

function calcLiquid(x: number): number {
    const m = 0.000246231155778894;      // Slope
    const b = 0.001037688442211056;    // Y-intercept
    return m * x + b;
}

function calcVapor(x: number): number {
    const m = -3.01472361809045226;  // More precise slope
    const b = 30.1507361809045226;  // More precise intercept
    return m * x + b;
}

