import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PracticeService } from './practice.service';
import { PracticeSchema, PRACTICE_SCHEMA_NAME } from './practice.schema';
import { PracticeController } from './practice.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PRACTICE_SCHEMA_NAME, schema: PracticeSchema },
    ]),
    AuthModule,
  ],
  providers: [PracticeService],
  controllers: [PracticeController],
})
export class PracticeModule {}
