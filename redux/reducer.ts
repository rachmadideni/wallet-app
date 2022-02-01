import produce from "immer"
import { IAppState, IPutSignupAction } from './types'
import { signupActions } from './actions'

export const INITIAL_STATE = {
  page: "signup",
  signup: {
    email: "",
    phone: "",
    signup_type_id: "email"
  }
}

export const appReducer = produce(( draft: IAppState = INITIAL_STATE, action: IPutSignupAction) => {
  switch(action.type){    
    case signupActions.PUT_SIGNUP_ACTION:
      draft.signup.email = action.payload.email;
      draft.signup.phone = action.payload.phone;
      draft.signup.signup_type_id = action.payload.signup_type_id;
      break;
    default:
      return draft;
  }
})