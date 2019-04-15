import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PracticeInterface } from '@intern/data';
import { PRACTICE_SCHEMA_NAME } from '../../practice.schema';

@Injectable()
export class PracticeService {
  constructor(
    @InjectModel(PRACTICE_SCHEMA_NAME) private readonly practiceModel: Model<PracticeInterface>,
  ) {}

  async create(practiceDto: PracticeInterface): Promise<PracticeInterface> {;
    return await new this.practiceModel(practiceDto).save();
  }

  async findAll(): Promise<PracticeInterface[]> {
    return await this.practiceModel
      .find()
      .exec();
  }
}
