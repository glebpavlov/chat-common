/**
 * базовый пользователь
 */
export interface IUserBase {

  /**
   * mongo id
   */
  _id?: string;

  /**
   * логин для авторизации
   */
  login: string;

  /**
   * email пользователя
   */
  email?: string;

  /**
   * имя пользователя
   */
  firstName?: string;

  /**
   * фамилия
   */
  secondName?: string;

  /**
   * отчество
   */
  lastName?: string;
}
