import { Injectable } from '@nestjs/common';
import { RunResultDto, ResultDto, RunStatus, TaskDto, PracticeDto } from '@intern/data';
import { ResultService } from '../../../result/services/result/result.service';
import { Model } from 'mongoose';
import * as puppeteer from 'puppeteer';
import { TaskService } from '../../../task/services/task/task.service';
import { PracticeService } from '../../../practice/services/practice/practice.service';
import { RUN_RESULT_SCHEMA_NAME } from '../../schema/run-result.schema';
import { InjectModel } from '@nestjs/mongoose';

// tslint:disable:no-eval
@Injectable()
export class RunnerService {
  constructor(
    private resultService: ResultService,
    private taskService: TaskService,
    private practiceService: PracticeService,
    @InjectModel(RUN_RESULT_SCHEMA_NAME) private readonly runResultModel: Model<RunResultDto>,
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
        ({ code }: ResultDto, { test }: PracticeDto) => {
          eval(code)
          if (!eval(test)) {
            throw new Error('Test fails');
          }
        },
        result,
        practice,
      )
    } catch (e) {
      return this.saveRunResult({ status: RunStatus.FAIL, errorMessage: e.message, resultId: result._id });
    }

    return this.saveRunResult({ status: RunStatus.SUCCESS, errorMessage: null, resultId: result._id  });
  }

  private async saveRunResult(
    runResult: Pick<RunResultDto, 'status' | 'errorMessage' | 'description' | 'resultId'>
  ):  Promise<RunResultDto> {
    return await new this.runResultModel(runResult)
      .save();
  }
}
