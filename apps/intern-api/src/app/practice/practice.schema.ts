import * as mongoose from 'mongoose';

export const PracticeSchema = new mongoose.Schema({
  name: String,
  description: String,
  sample: String,
  test: String,
});

export const PRACTICE_SCHEMA_NAME = 'practice';