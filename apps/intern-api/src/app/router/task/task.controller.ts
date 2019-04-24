import { Controller, Post, UseGuards, Get, Body, Param } from '@nestjs/common';
import { TaskDto, ResultDto } from '@intern/data';
import { AuthGuard } from '@nestjs/passport';
import { TaskService } from '../../task/services/task/task.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ResultService } from '../../result/services/result/result.service';

@Controller('task')
export class TaskController {
  constructor(
    private taskService: TaskService,
    private resultService: ResultService,
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

  @Get(':id/results')
  @UseGuards(AuthGuard())
  async findTaskResults(@Param('id') taskId: string): Promise<ResultDto[]> {
    return this.resultService.findByTaskId(taskId);
  }
}
