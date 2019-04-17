import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RESULT_SCHEMA_NAME } from '../../schema/result.schema';
import { ResultDto } from '@intern/data';
import { query } from '../../../helper/query.helper';

@Injectable()
export class ResultService {
  constructor(
    @InjectModel(RESULT_SCHEMA_NAME) private readonly resultModel: Model<ResultDto>,
  ) {}

  async create(practiceDto: ResultDto): Promise<ResultDto> {;
    return await new this.resultModel(practiceDto)
      .save();
  }

  async findAll(): Promise<ResultDto[]> {
    return await this.resultModel
      .find()
      .exec();
  }

  async findByUserId(authorId: string): Promise<ResultDto[]> {
    return await this.resultModel
      .find(query<ResultDto>({ authorId }))
      .exec();
  }
}
