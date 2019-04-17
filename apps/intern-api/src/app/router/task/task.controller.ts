import { Controller, Post, UseGuards, Get, Body } from '@nestjs/common';
import { TaskDto } from '@intern/data';
import { AuthGuard } from '@nestjs/passport';
import { TaskService } from '../../task/services/task/task.service';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('task')
export class TaskController {
  constructor(
    private taskService: TaskService,
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() taskDto: TaskDto): Promise<TaskDto> {
    return this.taskService.create(taskDto);
  }
  
  @Get()
  @UseGuards(AuthGuard())
  async findAll(): Promise<TaskDto[]> {
    return this.taskService.findAll();
  }
}
