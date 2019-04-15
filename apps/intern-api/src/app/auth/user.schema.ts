import * as mongoose from 'mongoose';
import { schema } from '../helper/schema.helper';
import { UserInterface } from '@intern/data';

export const UserSchema = new mongoose.Schema(schema<UserInterface>({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
  teacherId: String,
}));

export const USER_SCHEMA_NAME = 'user';