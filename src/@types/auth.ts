export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
  message?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}