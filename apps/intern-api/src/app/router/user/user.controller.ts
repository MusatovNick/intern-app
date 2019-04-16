import { Controller, Post, Body, Get, UseGuards, Request, Delete, Param } from '@nestjs/common';
import { UserService } from '../../auth/user.service';
import { UserInterface, AuthDataInterface, TaskInterface, ResultInterface } from '@intern/data';
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
  findAll(): Promise<UserInterface[]> {
    return this.userService.findAll();
  }

  @Get(':id/tasks')
  findUserTasks(@Param('id') id: string): Promise<TaskInterface[]> {
    return this.taskService.findByUserId(id);
  }

  @Get(':id/results')
  findUserResults(@Param('id') id: string): Promise<ResultInterface[]> {
    return this.resultService.findByUserId(id);
  }

  @Get('intern')
  @UseGuards(AuthGuard())
  findAllInterns(@Request() req): Promise<UserInterface[]> {
    return this.userService.findAllInternsByTeacherId(req.user.id);
  }

  @Get('teacher')
  @UseGuards(AuthGuard())
  findAllTeachers(): Promise<UserInterface[]> {
    return this.userService.findAllTeachers();
  }

  @Post('signup')
  create(@Body() userDto: UserInterface): Promise<UserInterface> {
    return this.userService.create(userDto);
  }

  @Post('signin')
  signIn(@Body() signInDto: { email: string, password: string }): Promise<AuthDataInterface> {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('verify')
  @UseGuards(AuthGuard())
  verify(): boolean {
    return true;
  }

  @Post(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() body: UserInterface): Promise<UserInterface> {
    return this.userService.updateOne(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.deleteOne(id);
  }
}
