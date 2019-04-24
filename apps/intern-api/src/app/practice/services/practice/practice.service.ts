import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PracticeDto } from '@intern/data';
import { PRACTICE_SCHEMA_NAME } from '../../schema/practice.schema';

@Injectable()
export class PracticeService {
  constructor(
    @InjectModel(PRACTICE_SCHEMA_NAME) private readonly practiceModel: Model<PracticeDto>,
  ) {}

  async create(practiceDto: PracticeDto): Promise<PracticeDto> {;
    return await new this.practiceModel(practiceDto)
      .save();
  }

  async findById(id: string): Promise<PracticeDto> {
    const item: PracticeDto = await this.practiceModel
      .findById(id)
      .exec();
    
    if (!item) {
      throw new NotFoundException('Practice with such id was not found')
    }

    return item;
  }

  async findAll(): Promise<PracticeDto[]> {
    return await this.practiceModel
      .find()
      .exec();
  }
}
