import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusController } from './status/status.controller';
import { RepairBayController } from './repair-bay/repair-bay.controller';
import { TeapotController } from './teapot/teapot.controller';
import { PhaseChangeDiagramController } from './phase-change-diagram/phase-change-diagram.controller';

@Module({
  imports: [],
  controllers: [AppController, StatusController, RepairBayController, TeapotController, PhaseChangeDiagramController],
  providers: [AppService],
})
export class AppModule {}
