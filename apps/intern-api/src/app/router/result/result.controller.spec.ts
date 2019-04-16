import { Test, TestingModule } from '@nestjs/testing';
import { ResultController } from './result.controller';

describe('Result Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ResultController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ResultController = module.get<ResultController>(ResultController);
    expect(controller).toBeDefined();
  });
});
