import { IPutSignupAction } from './types'
export const signupActions = {
  PUT_SIGNUP_ACTION: 'APP/PUT_SIGNUP_ACTION'
}

export function putSignupAction(email:string, phone: string,
  signup_type_id: string
  ): IPutSignupAction {
  return {
    type: signupActions.PUT_SIGNUP_ACTION,
    payload:{
      email,
      phone,
      signup_type_id
    }
  }
}