import { Identifiable } from '../base/identifiable.dto';
import { RoleType } from '../enums/role-type.enum';

export class UserDto extends Identifiable {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: RoleType;
  teacherId: string;
  createdDate: number;
}
