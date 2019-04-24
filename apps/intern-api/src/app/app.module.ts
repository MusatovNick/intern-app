import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule } from './router/router.module';
import { ResultModule } from './result/result.module';
import { RunnerModule } from './runner/runner.module';

const MONGO_URI='mongodb+srv://vladborsh:QWEASD123@cluster0-aahqr.mongodb.net/test?retryWrites=true'

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI),
    RouterModule,
    RunnerModule,
  ],
})
export class AppModule {}
