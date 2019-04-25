import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto, RoleType } from '@intern/data';
import { USER_SCHEMA_NAME } from './user.schema';
import { selector } from '../helper/selector.helper';
import { query } from '../helper/query.helper';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER_SCHEMA_NAME) private readonly userModel: Model<UserDto>,
  ) {}

  async create(userDto: UserDto): Promise<UserDto> {
    userDto.createdDate = Date.now();

    return await new this.userModel(userDto).save();
  }

  async findAll(): Promise<UserDto[]> {
    return await this.userModel
      .find()
      .exec();
  }

  async findAllInternsByTeacherId(teacherId: string): Promise<UserDto[]> {
    return await this.userModel
      .find(query<UserDto>({ role: RoleType.INTERN, teacherId: teacherId }))
      .select(selector<UserDto>('firstName','lastName','email'))
      .exec();
  }

  async findAllTeachers(): Promise<UserDto[]> {
    return await this.userModel
      .find(query<UserDto>({ role: RoleType.TEACHER }))
      .select(selector<UserDto>('firstName', 'lastName', 'email'))
      .exec();
  }

  async findOneByEmail(email: string): Promise<UserDto> {
    return await this.userModel
      .findOne(query<UserDto>({ email }));
  }

  async updateOne(id: string, body: UserDto): Promise<UserDto> {
    return await this.userModel
      .findByIdAndUpdate(id, body);
  }

  async deleteOne(id: string): Promise<void> {
    return await this.userModel
      .findByIdAndRemove(id);
  }
}
