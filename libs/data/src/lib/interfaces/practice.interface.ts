import { IdentifiableInterface } from '../base/identifiable.interface';

export interface PracticeInterface extends IdentifiableInterface {
  name: string;
  description: string;
  sample: string;
  test: string;
}
