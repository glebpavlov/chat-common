import { IUserRegistration } from '../registration/user-registration.interface';

/**
 * данные пользователя используемы для авторизации
 */
export interface IUserAuthentication extends Pick<IUserRegistration, 'password' | 'login'> {}
