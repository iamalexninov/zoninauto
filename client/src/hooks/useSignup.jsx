import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { register } from "../api/users";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate()

  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await register(username, email, password);
      dispatch({ type: "LOGIN", payload: result });
      navigate('/')
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
      navigate('/signup')
    }

    setIsLoading(false);
  };

  return { signup, error, isLoading };
};

export default useSignup;
