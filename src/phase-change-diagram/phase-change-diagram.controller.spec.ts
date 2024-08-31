import { Test, TestingModule } from '@nestjs/testing';
import { PhaseChangeDiagramController } from './phase-change-diagram.controller';

describe('PhaseChangeDiagramController', () => {
  let controller: PhaseChangeDiagramController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhaseChangeDiagramController],
    }).compile();

    controller = module.get<PhaseChangeDiagramController>(PhaseChangeDiagramController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
