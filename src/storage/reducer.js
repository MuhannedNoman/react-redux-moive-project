export function setUser(user){
  console.log("user",user)
  return {
    type: 'user/add',
    payload: user
  }
}

export function authStatus(status){
  return {
    type: 'auth/status',
    payload: status
  }
}

const initValue = {
  user: {},
  isAuthenticated: false
};

function reducer(state=initValue, action){
  switch(action.type){
    case "user/add":
      return {...state, user: action.payload}
    case "auth/status":
      return {...state, isAuthenticated: action.payload}
    default:
      return state;
  }
}

export default reducer;