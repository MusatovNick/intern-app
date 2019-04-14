import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInterface } from '@intern/data';
import { USER_SCHEMA_NAME } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER_SCHEMA_NAME) private readonly userModel: Model<UserInterface>,
  ) {}

  async create(userDto: UserInterface): Promise<UserInterface> {
    const created = new this.userModel(userDto);
    return await created.save();
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<UserInterface> {
    return await this.userModel.findOne({ email });
  }
}
