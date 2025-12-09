export type UserRole = 'ADMIN' | 'MANAGER' | 'USER';

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  role: UserRole;
  is_verified: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  confirm_password: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface SendOTPPayload {
  email: string;
}

export interface VerifyOTPPayload {
  email: string;
  otp: string;
}

export interface OTPResponse {
  message: string;
}


export interface AuthContextType {
  user: User | null;    
  loading: boolean;
  loginUser: (loginPayload: LoginPayload) => Promise<void>;
  logoutUser: () => void;
}