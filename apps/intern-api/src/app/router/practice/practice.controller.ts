import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PracticeService } from '../../practice/services/practice/practice.service';
import { PracticeInterface } from '@intern/data';
import { AuthGuard } from '@nestjs/passport';

@Controller('practice')
export class PracticeController {
  constructor(
    private practiceService: PracticeService,
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() practiceDto: PracticeInterface): Promise<PracticeInterface> {
    return this.practiceService.create(practiceDto);
  }
  
  @Get()
  @UseGuards(AuthGuard())
  findAll(): Promise<PracticeInterface[]> {
    return this.practiceService.findAll();
  }
}
