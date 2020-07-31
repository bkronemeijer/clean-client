import { LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID, LOGIN_FAIL} from "../StoreTypes/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  loginSucces: null,
  name: null,
  email: null,
  householdId: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS: 
      localStorage.setItem("token", action.payload.token)
      return {
        ...state,
        loginSucces: true,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        householdId: action.payload.householdId
      }
    
    case LOGIN_FAIL: 
      return {
        ...state,
        loginSucces: false
      }

    case LOG_OUT:
        localStorage.removeItem("token");
        return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };
        
    default:
      return state;
  }
};
