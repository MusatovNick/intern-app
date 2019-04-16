import { Controller, Post, UseGuards, Get, Body } from '@nestjs/common';
import { ResultService } from '../../result/services/result/result.service';
import { AuthGuard } from '@nestjs/passport';
import { ResultInterface } from '@intern/data';

@Controller('result')
export class ResultController {
  constructor(
    private resultService: ResultService,
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() resultDto: ResultInterface): Promise<ResultInterface> {
    return this.resultService.create(resultDto);
  }
  
  @Get()
  @UseGuards(AuthGuard())
  findAll(): Promise<ResultInterface[]> {
    return this.resultService.findAll();
  }
}
