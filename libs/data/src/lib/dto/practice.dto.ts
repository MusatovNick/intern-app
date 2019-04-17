import { Identifiable } from '../base/identifiable.dto';
import { ApiModelProperty } from '@nestjs/swagger';

export class PracticeDto extends Identifiable {
  @ApiModelProperty()
  name: string;
  @ApiModelProperty()
  description: string;
  @ApiModelProperty()
  sample: string;
  @ApiModelProperty()
  test: string;
}
