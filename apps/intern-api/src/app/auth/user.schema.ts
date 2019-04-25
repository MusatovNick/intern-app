import * as mongoose from 'mongoose';
import { schema } from '../helper/schema.helper';
import { UserDto } from '@intern/data';

export const UserSchema = new mongoose.Schema(schema<UserDto>({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
  teacherId: String,
  createdDate: Number,
}));

export const USER_SCHEMA_NAME = 'user';