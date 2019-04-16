import { IdentifiableInterface } from '../base/identifiable.interface';
import { RoleType } from '../enums/role-type.enum';

export interface UserInterface extends IdentifiableInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: RoleType;
    teacherId: string;
}