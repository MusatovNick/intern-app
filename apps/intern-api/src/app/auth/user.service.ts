import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInterface, RoleType } from '@intern/data';
import { USER_SCHEMA_NAME } from './user.schema';
import { selector } from '../helper/selector.helper';
import { query } from '../helper/query.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER_SCHEMA_NAME) private readonly userModel: Model<UserInterface>,
  ) {}

  async create(userDto: UserInterface): Promise<UserInterface> {
    return await new this.userModel(userDto).save();
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userModel
      .find()
      .exec();
  }

  async findAllInternsByTeacherId(teacherId: string): Promise<UserInterface[]> {
    return await this.userModel
      .find(query<UserInterface>({ role: RoleType.INTERN, teacherId: teacherId }))
      .select(selector<UserInterface>('firstName','lastName','email'))
      .exec();
  }

  async findAllTeachers(): Promise<UserInterface[]> {
    return await this.userModel
      .find(query<UserInterface>({ role: RoleType.TEACHER }))
      .select(selector<UserInterface>('firstName', 'lastName', 'email'))
      .exec();
  }

  async findOneByEmail(email: string): Promise<UserInterface> {
    return await this.userModel
      .findOne(query<UserInterface>({ email }));
  }

  async updateOne(id: string, body: UserInterface): Promise<UserInterface> {
    return await this.userModel
      .findByIdAndUpdate(id, body);
  }

  async deleteOne(id: string): Promise<void> {
    return await this.userModel
      .findByIdAndRemove(id);
  }
}
