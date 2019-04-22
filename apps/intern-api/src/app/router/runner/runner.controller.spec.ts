import { Test, TestingModule } from '@nestjs/testing';
import { RunnerController } from './runner.controller';

describe('Runner Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [RunnerController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: RunnerController = module.get<RunnerController>(RunnerController);
    expect(controller).toBeDefined();
  });
});
