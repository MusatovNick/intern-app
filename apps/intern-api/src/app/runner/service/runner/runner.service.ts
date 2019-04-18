import { Injectable, NotFoundException } from '@nestjs/common';
import { RunResultDto, ResultDto, RunStatus } from '@intern/data';
import { ResultService } from '../../../result/services/result/result.service';
import * as puppeteer from 'puppeteer';

@Injectable()
export class RunnerService {
  constructor(
    private resultService: ResultService,
  ) {}

  async runResult(resultId: string): Promise<RunResultDto> {
    const result: ResultDto = await this.resultService.findById(resultId)

    if (!result) {
      throw new NotFoundException('Result not found');
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    /* page.on('console', consoleObj => console.log(consoleObj.text())); */
    
    try {
      //await page.evaluate((resultItem: ResultDto) => eval(resultItem.code), result)
      await page.evaluate((resultItem: ResultDto) => { const t = 0 / 1000 }, result)
    } catch (e) {
      await browser.close();
      return { status: RunStatus.FAIL, errors: e.message };
    }
    await browser.close();
    return { status: RunStatus.SUCCESS, errors: null };
  }
}
