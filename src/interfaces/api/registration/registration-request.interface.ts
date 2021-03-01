import { IUserRegistration } from "./user-registration.interface";

/**
 * запрос на регистрацию пользователя
 */
export interface IRegistrationRequest {
  recaptchaToken: string;
  userData: IUserRegistration
}
