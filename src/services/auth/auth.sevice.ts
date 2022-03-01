import { CURRENT_USER, TOKEN } from "./auth.constant";
import { LocalStorageService } from "../localStorage.service";

export class AuthService {

  /**
   * Sets the current user token.
   * @param jwtToken The token to save.
   */
  static setToken(jwtToken: string): void {
    if(jwtToken) LocalStorageService.set(TOKEN, jwtToken);
  }

  /**
   * Gets the current user's token.
   * @returns The token saved locally.
   */
  static getToken(): string | null{
    return LocalStorageService.get(TOKEN);
  }

  /**
   * Sets the current user details.
   * @param user The user details coming from the backend once logged in.
   */
  static setUserInfos(user: any): void  {
    if(user) LocalStorageService.set(CURRENT_USER, JSON.stringify(user));
  }

   /**
   * Gets the current user details into the local storage.
   * @returns The user details.
   */
  static getUserInfos(): any | null {
    const user = LocalStorageService.get(CURRENT_USER);

    try {
      if (user) {
        return JSON.parse(user);
      }
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  /**
   * The user is logge din.
   * @returns True if he's, else it returns false.
   */
  static isLoggedIn (): boolean {
    return this.getToken() != null && this.getUserInfos() != null;
  }

  /**
   * Handle the login callback to ave the user details.
   * @param jwtToken 
   * @param user 
   */
  static proccessLogin(jwtToken: string, user: any): void {
    this.setToken(jwtToken);
    this.setUserInfos(user);
  }

  /**
   * Signing the user out, it deletes the current session data.
   */
  static processLogout(): void {
    LocalStorageService.remove(TOKEN);
    LocalStorageService.remove(CURRENT_USER);
  }
}