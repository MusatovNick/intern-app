import { Module } from '@nestjs/common';
import { ResultService } from './services/result/result.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { RESULT_SCHEMA_NAME, ResultSchema } from './schema/result.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RESULT_SCHEMA_NAME, schema: ResultSchema },
    ]),
    AuthModule,
  ],
  providers: [ResultService],
  exports: [ResultService],
})
export class ResultModule {}
