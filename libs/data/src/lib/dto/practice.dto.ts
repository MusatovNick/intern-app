import { Identifiable } from '../base/identifiable.dto';
import { ApiModelProperty } from '@nestjs/swagger';

export class PracticeDto extends Identifiable {
  name: string;
  description: string;
  sample: string;
  test: string;
}
