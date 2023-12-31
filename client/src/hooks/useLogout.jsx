import { logout } from "../api/users";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const signout = async () => {
    await logout();
    dispatch({ type: "LOGOUT" });
  };

  return { signout };
};

export default useLogout;
