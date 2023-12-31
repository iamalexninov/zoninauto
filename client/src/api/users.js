import { get, post } from "../api/api";
import { clearUser, setUser } from "../utils/localeStorage";

const endpoints = {
  register: "/users/register",
  login: "/users/login",
  logout: "/users/logout",
};

export async function register(username, email, password) {
  const result = await post(endpoints.register, { username, email, password });
  setUser(result);
  return result;
}

export async function login(email, password) {
  const result = await post(endpoints.login, { email, password });
  setUser(result);
  return result;
}

export async function logout() {
  get(endpoints.logout);
  clearUser();
}
