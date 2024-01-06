import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { login } from "../api/users";
import { useNavigate } from "react-router-dom";


const useSignin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const navigate = useNavigate()

  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await login(email, password);
      dispatch({ type: "LOGIN", payload: result });
      navigate("/");
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
      navigate('/signin')
    }

    setIsLoading(false);
  };

  return { signin, error, isLoading };
};

export default useSignin;
