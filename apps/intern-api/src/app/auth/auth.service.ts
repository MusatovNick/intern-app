import { Injectable, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { JwtUserPayload } from './jwt-user-payload.interface';
import { UserDto, AuthDataDto } from '@intern/data';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signIn(email: string, password: string): Promise<AuthDataDto> {
    const user: UserDto = await this.userService.findOneByEmail(email);
    
    if (user.password !== password) {
      throw new ForbiddenException();
    }

    return {
        token: this.jwtService.sign({ email: user.email, role: user.role }),
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        id: user._id,
    };
  }

  async validateUser(payload: JwtUserPayload): Promise<UserDto> {
    return await this.userService.findOneByEmail(payload.email);
  }
}