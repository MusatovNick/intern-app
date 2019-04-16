import { Module } from '@nestjs/common';
import { TaskService } from './services/task/task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TASK_SCHEMA_NAME, TaskSchema } from './schema/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TASK_SCHEMA_NAME, schema: TaskSchema },
    ]),
  ],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
