import { loginUserActionCreator } from "../store/features/users/usersSlicers";
import { useAppDispatch } from "../store/hooks";
import { UserCredentials, LoginResponse, CustomTokenPayload } from "../types";
import jwt_decode from "jwt-decode";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application/json" },
    });
    const { token } = (await response.json()) as LoginResponse;

    const tokenPayload: CustomTokenPayload = jwt_decode(token);

    const { username, id } = tokenPayload;

    dispatch(
      loginUserActionCreator({
        username,
        id,
        token,
        isLogged: true,
      })
    );
    localStorage.setItem("token", token);
  };
  return { loginUser };
};

export default useUser;
