import { Controller, Post, Body, Get, UseGuards, Request, Delete, Param } from '@nestjs/common';
import { UserService } from '../../auth/user.service';
import { UserInterface, AuthDataInterface } from '@intern/data';
import { AuthService } from '../../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  findAll(): Promise<UserInterface[]> {
    return this.userService.findAll();
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
