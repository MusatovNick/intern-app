import { Module } from '@nestjs/common';
import { RunnerService } from './service/runner/runner.service';
import { PracticeModule } from '../practice/practice.module';
import { TaskModule } from '../task/task.module';
import { ResultModule } from '../result/result.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RUN_RESULT_SCHEMA_NAME, RunResultSchema } from './schema/run-result.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RUN_RESULT_SCHEMA_NAME, schema: RunResultSchema },
    ]),
    PracticeModule,
    TaskModule,
    ResultModule,
  ],
  providers: [RunnerService],
  exports: [RunnerService],
})
export class RunnerModule {}
