import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { UserSchema, USER_SCHEMA_NAME } from './user.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from './user.service';
import { SECRET } from './auth.constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: USER_SCHEMA_NAME, schema: UserSchema },
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: SECRET,
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  providers: [
    UserService,
    AuthService,
    JwtStrategy,
  ],
  exports: [
    PassportModule,
    AuthService,
    UserService,
  ],
})
export class AuthModule {}
