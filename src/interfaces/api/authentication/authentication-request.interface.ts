import { IUserRegistration } from '../registration/user-registration.interface';

/**
 * запрос на авторизацию пользователя
 */
export interface IAuthenticationRequest {
  recaptchaToken: string;
  authenticationData: IUserRegistration
}

