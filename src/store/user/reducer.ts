import { LOGIN_SUCCESS, LOG_OUT, TOKEN_STILL_VALID} from "../StoreTypes/actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS: 
      localStorage.setItem("token", action.payload.token)
      console.log("hi from reducer user", action.payload)
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
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
