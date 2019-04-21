import { Injectable, NotFoundException } from '@nestjs/common';
import { RunResultDto, ResultDto, RunStatus, TaskDto, PracticeDto } from '@intern/data';
import { ResultService } from '../../../result/services/result/result.service';
import * as puppeteer from 'puppeteer';
import { TaskService } from '../../../task/services/task/task.service';
import { PracticeService } from '../../../practice/services/practice/practice.service';

// tslint:disable:no-eval
@Injectable()
export class RunnerService {
  constructor(
    private resultService: ResultService,
    private taskService: TaskService,
    private practiceService: PracticeService,
  ) {}

  public async runResult(resultId: string): Promise<RunResultDto> {
    const result: ResultDto = await this.resultService.findById(resultId)
    const task: TaskDto = await this.taskService.findById(result.taskId);
    const practice: PracticeDto = await this.practiceService.findById(task.practiceId);

    return await this.initEnvironmentAndRun(result, practice);
  }

  private async initEnvironmentAndRun(result: ResultDto, practice: PracticeDto): Promise<RunResultDto> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', consoleObj => console.log(consoleObj.text()));
    const runResult: RunResultDto = await this.makeRun(page, result, practice);
    await browser.close();

    return runResult;
  }

  private async makeRun(page: any, result: ResultDto, practice: PracticeDto): Promise<RunResultDto> {
    try {
      await page.evaluate(
        (resultI: ResultDto, practiceI: PracticeDto) => eval([resultI.code, practiceI.test].join(';\n')),
        result,
        practice,
      )
    } catch (e) {
      return { status: RunStatus.FAIL, errors: e.message };
    }

    return { status: RunStatus.SUCCESS, errors: null };
  }
}
