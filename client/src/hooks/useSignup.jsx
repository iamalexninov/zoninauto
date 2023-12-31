import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { register } from "../api/users";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    const result = await register(username, email, password);
    dispatch({ type: "LOGIN", payload: result });

    setIsLoading(false);
  };

  return { signup, error, isLoading };
};

export default useSignup;
