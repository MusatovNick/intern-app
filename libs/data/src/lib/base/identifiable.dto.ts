import { ApiModelProperty } from '@nestjs/swagger';

export class Identifiable {
  @ApiModelProperty()
  _id: string
}