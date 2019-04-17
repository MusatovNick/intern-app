import { Identifiable } from '../base/identifiable.dto';
import { RoleType } from '../enums/role-type.enum';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto extends Identifiable {
  @ApiModelProperty()
  firstName: string;
  @ApiModelProperty()
  lastName: string;
  @ApiModelProperty()
  email: string;
  @ApiModelProperty()
  password: string;
  @ApiModelProperty({ enum: [RoleType.ADMIN, RoleType.INTERN, RoleType.TEACHER,]})
  role: RoleType;
  @ApiModelProperty()
  teacherId: string;
}
