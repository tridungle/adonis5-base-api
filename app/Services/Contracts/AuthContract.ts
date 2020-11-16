export interface LoginResponse {
  token: {
    token: string
    type: string
  }
  user: {
    email: string
    username: string
    avatar: string
    firstName: string
    surname: string
  }
}

export interface AuthContract {
  authorize(uid: string, password: string, ...args: any): Promise<LoginResponse>
}
