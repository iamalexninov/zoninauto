import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { login } from "../api/users";

const useSignin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await login(email, password);
      dispatch({ type: "LOGIN", payload: result });
    } catch (err) {
      setError(err.message);
      throw err;
    }

    setIsLoading(false);
  };

  return { signin, error, isLoading };
};

export default useSignin;
