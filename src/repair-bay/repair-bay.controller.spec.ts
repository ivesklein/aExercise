import { Test, TestingModule } from '@nestjs/testing';
import { RepairBayController } from './repair-bay.controller';

describe('RepairBayController', () => {
  let controller: RepairBayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepairBayController],
    }).compile();

    controller = module.get<RepairBayController>(RepairBayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
