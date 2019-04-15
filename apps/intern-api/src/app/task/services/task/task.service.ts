import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TASK_SCHEMA_NAME } from '../../schema/task.schema';
import { TaskInterface } from '@intern/data';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TASK_SCHEMA_NAME) private readonly taskModel: Model<TaskInterface>,
  ) {}

  async create(taskDto: TaskInterface): Promise<TaskInterface> {;
    return await new this.taskModel(taskDto).save();
  }

  async findAll(): Promise<TaskInterface[]> {
    return await this.taskModel
      .find()
      .exec();
  }
}
