import { Identifiable } from '../base/identifiable.dto';
import { ApiModelProperty } from '@nestjs/swagger';

export class ResultDto extends Identifiable {
  @ApiModelProperty()
  code: string;
  @ApiModelProperty()
  taskId: string;
  @ApiModelProperty()
  authorId: string;
  @ApiModelProperty()
  createdDate: string;
}
