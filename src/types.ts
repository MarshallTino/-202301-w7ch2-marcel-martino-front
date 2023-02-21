import { JwtPayload } from "jwt-decode";

export interface RobotStructure {
  _id: number;
  name: string;
  image: string;
  speed: number;
  endurance: number;
  creationDate: string;
}

export type RobotsStructure = RobotStructure[];
export interface APIdata {
  robots: RobotsStructure;
}

export interface User {
  username: string;
  token: string;
}

export interface UserState extends User {
  id: string;
  isLogged: boolean;
}

export interface UserCredentials {
  user: string;
  password: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface LoginResponse {
  token: string;
}

export interface UserCredentials {
  user: string;
  password: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  username: string;
}
