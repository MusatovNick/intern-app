import { Module } from '@nestjs/common';
import { PracticeController } from './practice/practice.controller';
import { TaskController } from './task/task.controller';
import { UserController } from './user/user.controller';
import { PracticeModule } from '../practice/practice.module';
import { TaskModule } from '../task/task.module';
import { ResultController } from './result/result.controller';
import { ResultModule } from '../result/result.module';
import { RunnerController } from './runner/runner.controller';
import { RunnerModule } from '../runner/runner.module';

@Module({
  imports: [
    PracticeModule,
    TaskModule,
    ResultModule,
    RunnerModule,
  ],
  controllers: [
    PracticeController,
    TaskController,
    UserController,
    ResultController,
    RunnerController,
  ],
})
export class RouterModule {}
