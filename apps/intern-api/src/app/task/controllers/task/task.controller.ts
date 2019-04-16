import { Controller, Post, UseGuards, Get, Body } from '@nestjs/common';
import { TaskInterface } from '@intern/data';
import { TaskService } from '../../services/task/task.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('task')
export class TaskController {
  constructor(
    private taskService: TaskService,
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() taskDto: TaskInterface): Promise<TaskInterface> {
    return this.taskService.create(taskDto);
  }
  
  @Get()
  @UseGuards(AuthGuard())
  findAll(): Promise<TaskInterface[]> {
    return this.taskService.findAll();
  }
}
