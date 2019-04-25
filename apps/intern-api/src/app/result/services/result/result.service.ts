import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async update(id: string, practiceDto: ResultDto): Promise<ResultDto> {;
    return await this.resultModel
      .findOneAndUpdate({ _id: id }, practiceDto)
      .exec();
  }

  async findById(id: string): Promise<ResultDto> {
    const item: ResultDto = await this.resultModel
      .findById(id)
      .exec();
    
    if (!item) {
      throw new NotFoundException('Result with such id was not found')
    }

    return item;
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

  async findByTaskId(taskId: string): Promise<ResultDto[]> {
    return await this.resultModel
      .find(query<ResultDto>({ taskId }))
      .exec();
  }
}
