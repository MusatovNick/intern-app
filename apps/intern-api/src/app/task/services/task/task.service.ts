import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TASK_SCHEMA_NAME } from '../../schema/task.schema';
import { TaskDto } from '@intern/data';
import { query } from '../../../helper/query.helper';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TASK_SCHEMA_NAME) private readonly taskModel: Model<TaskDto>,
  ) {}

  async create(taskDto: TaskDto): Promise<TaskDto> {;
    return await new this.taskModel(taskDto).save();
  }

  async findById(id: string): Promise<TaskDto> {
    const item: TaskDto = await this.taskModel
      .findById(id)
      .exec();
    
    if (!item) {
      throw new NotFoundException('Task with such id was not found')
    }

    return item;
  }

  async findAll(): Promise<TaskDto[]> {
    return await this.taskModel
      .find()
      .exec();
  }

  async findByUserId(userId: string): Promise<TaskDto[]> {
    return await this.taskModel
      .find(query<TaskDto>({ userId }))
      .exec();
  }
}
