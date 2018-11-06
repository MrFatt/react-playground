import { createStore } from "redux";

const initialState = {
  user:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      {
    avatar:
      "https://pbs.twimg.com/profile_images/1017242934435983360/_yesSDzM_400x400.jpg",
    name: "Dave",                                          
    followers: 1234,
    following: 123                                                                   
  }                                               
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
