import { Controller, Post, UseGuards, Get, Body, Param } from '@nestjs/common';
import { ResultService } from '../../result/services/result/result.service';
import { AuthGuard } from '@nestjs/passport';
import { ResultDto } from '@intern/data';

@Controller('result')
export class ResultController {
  constructor(
    private resultService: ResultService,
  ) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() resultDto: ResultDto): Promise<ResultDto> {
    return this.resultService.create(resultDto);
  }

  @Post(':id')
  @UseGuards(AuthGuard())
  update(@Param('id') id: string, @Body() resultDto: ResultDto): Promise<ResultDto> {
    return this.resultService.update(id, resultDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll(): Promise<ResultDto[]> {
    return this.resultService.findAll();
  }
}
