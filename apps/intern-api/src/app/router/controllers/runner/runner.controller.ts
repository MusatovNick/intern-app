import { Controller, Post, UseGuards, Param } from '@nestjs/common';
import { RunnerService } from '../../../runner/service/runner/runner.service';
import { AuthGuard } from '@nestjs/passport';
import { RunResultDto } from '@intern/data';

@Controller('runner')
export class RunnerController {
  constructor(
    private runnerService: RunnerService,
  ) {}

  @Post(':id/run')
  @UseGuards(AuthGuard())
  runResult(@Param('id') id: string): Promise<RunResultDto> {
    return this.runnerService.runResult(id);
  }
}
