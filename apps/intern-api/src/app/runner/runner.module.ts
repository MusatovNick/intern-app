import { Module } from '@nestjs/common';
import { RunnerService } from './service/runner/runner.service';
import { PracticeModule } from '../practice/practice.module';
import { TaskModule } from '../task/task.module';
import { ResultModule } from '../result/result.module';

@Module({
  imports: [
    PracticeModule,
    TaskModule,
    ResultModule,
  ],
  providers: [RunnerService],
  exports: [RunnerService],
})
export class RunnerModule {}
