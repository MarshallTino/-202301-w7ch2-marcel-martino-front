import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginUserActionCreator } from "../store/features/users/usersSlicers";
import { CustomTokenPayload } from "../types";
import jwt_decode from "jwt-decode";
interface UseTokenStrucutre {
  getToken: () => void;
}

const useToken = (): UseTokenStrucutre => {
  const dispatch = useDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { id, username } = jwt_decode<CustomTokenPayload>(token);

      dispatch(
        loginUserActionCreator({
          token,
          id,
          username,
          isLogged: false,
        })
      );
    }
  }, [dispatch]);
  return { getToken };
};

export default useToken;
