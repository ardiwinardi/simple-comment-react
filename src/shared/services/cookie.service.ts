import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { cookieKeys } from "../constants/cookie.constant";

const cookieService = {
  async saveToken(token: string) {
    setCookie(cookieKeys.ACCESS_TOKEN, token);
  },

  async getToken(): Promise<string | null> {
    const token = getCookie(cookieKeys.ACCESS_TOKEN);
    return token ?? null;
  },

  async removeToken() {
    deleteCookie(cookieKeys.ACCESS_TOKEN);
  },
};

export default cookieService;
