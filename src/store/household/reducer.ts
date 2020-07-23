const initialState = {
  loading: false,
  household: {}
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "HOUSEHOLD_USERS_FETCHED" :
      console.log("hoi van reducer", action.payload)
      return {
        ...state,
        household: action.payload
      }
    default:
      return state;
  }
};
