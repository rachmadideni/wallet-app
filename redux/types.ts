import { signupActions } from './actions'

type userSignupProps = {
  email:string;
  phone: string;
  signup_type_id: string;
} 

export interface IAppState {  
  signup: userSignupProps
}

export interface SignupFormState {
  email: string;
  phone: string;
  signup_type_id: string;
}

export interface AccountFormState {
  fullName: string;
  accountId: string;  
}

export interface VerificationFormState {
  verification_code: string;
}

export interface IPutSignupAction {
  type: typeof signupActions.PUT_SIGNUP_ACTION,
  payload: userSignupProps
}