export class SecurityUtil {

  public static headersToken() {
    return {Authorization: `Bearer ${this.getToken()}`, 'Content-Type': 'application/json'};
  }

  public static header() {
    return {'Content-Type': 'application/json'};
  }

   public static getToken() {
      return localStorage.getItem('lab.token');
   }

   public static setToken(token: any) {
      localStorage.setItem('lab.token', token);
   }

   public static removeToken() {
      localStorage.removeItem('lab.token');
   }

}
