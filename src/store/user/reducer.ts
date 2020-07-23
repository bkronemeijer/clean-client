const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": 
      localStorage.setItem("token", action.payload.token)
      console.log("hi from reducer user", action.payload)
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      }
    default:
      return state;
  }
};
