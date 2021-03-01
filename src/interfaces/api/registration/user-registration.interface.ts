import { IUserBase } from "../../user-base.interface";

/**
 * данные пользователя используемые при регистрации
 */
export interface IUserRegistration extends IUserBase {
  password: string;
}
