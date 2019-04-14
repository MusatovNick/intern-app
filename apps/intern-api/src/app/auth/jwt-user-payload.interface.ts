import { RoleType } from '@intern/data';

export interface JwtUserPayload {
  email: string;
  role: RoleType;
}