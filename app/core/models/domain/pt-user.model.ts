import { ptObjectBase } from './pt-object-base.model';
import { GenderEnum } from './enums/gender.enum';
export interface PtUser extends ptObjectBase{
    fullName: string;
    avatar: string;
    gender: GenderEnum;
}