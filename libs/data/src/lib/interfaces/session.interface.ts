import { IdentifiableInterface } from '../base/identifiable.interface';

export interface SessionInterface extends IdentifiableInterface {
  payload: string;
  userId: string;
}