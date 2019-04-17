import { Controller, Post, Body, Get, UseGuards, Request, Delete, Param } from '@nestjs/common';
import { UserService } from '../../auth/user.service';
import { UserDto, AuthDataDto, TaskDto, ResultDto } from '@intern/data';
import { AuthService } from '../../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { TaskService } from '../../task/services/task/task.service';
import { ResultService } from '../../result/services/result/result.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly taskService: TaskService,
    private readonly resultService: ResultService,
  ) {}

  @Get()
  findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Get(':id/tasks')
  findUserTasks(@Param('id') id: string): Promise<TaskDto[]> {
    return this.taskService.findByUserId(id);
  }

  @Get(':id/results')
  findUserResults(@Param('id') id: string): Promise<ResultDto[]> {
    return this.resultService.findByUserId(id);
  }

  @Get('intern')
  @UseGuards(AuthGuard())
  findAllInterns(@Request() req): Promise<UserDto[]> {
    return this.userService.findAllInternsByTeacherId(req.user.id);
  }

  @Get('teacher')
  @UseGuards(AuthGuard())
  findAllTeachers(): Promise<UserDto[]> {
    return this.userService.findAllTeachers();
  }

  @Post('signup')
  create(@Body() userDto: UserDto): Promise<UserDto> {
    return this.userService.create(userDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: { email: string, password: string }): Promise<AuthDataDto> {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('verify')
  @UseGuards(AuthGuard())
  verify(): boolean {
    return true;
  }

  @Post(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() body: UserDto): Promise<UserDto> {
    return this.userService.updateOne(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.deleteOne(id);
  }
}
