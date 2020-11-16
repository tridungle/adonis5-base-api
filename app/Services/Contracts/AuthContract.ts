import { UserContract } from 'App/Models/Contracts'

export type TokenResponse = {
  token: string
  type: string
}

export interface UserLoginResponse extends UserContract {
  avatar: string
  firstName: string
  surname: string
}

export interface LoginResponse {
  token: TokenResponse
  user: UserLoginResponse
}

export interface AuthContract {
  authorize(uid: string, password: string, ...args: any): Promise<LoginResponse>
}
