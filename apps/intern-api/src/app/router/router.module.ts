import { Module } from '@nestjs/common';
import { PracticeController } from './practice/practice.controller';
import { TaskController } from './task/task.controller';
import { UserController } from './user/user.controller';
import { PracticeModule } from '../practice/practice.module';
import { TaskModule } from '../task/task.module';
import { ResultController } from './result/result.controller';
import { ResultModule } from '../result/result.module';

@Module({
  imports: [
    PracticeModule,
    TaskModule,
    ResultModule,
  ],
  controllers: [
    PracticeController,
    TaskController,
    UserController,
    ResultController,
  ],
})
export class RouterModule {}
