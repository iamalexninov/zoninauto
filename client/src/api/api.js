import { clearUser, getUser } from "../utils/localeStorage";

const host = "http://localhost:5500/api";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  const user = getUser();

  if (user) {
    const token = user.accessToken;
    options.headers["X-Authorization"] = token;
  }

  if (data !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(host + url, options);

    let result;

    if (response.status !== 204) {
      result = await response.json();
    }

    if (response.ok === false) {
      if (response.status === 403) {
        clearUser();
      }

      const error = result;
      throw error;
    }

    return result;
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
 