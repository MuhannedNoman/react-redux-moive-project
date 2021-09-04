export function setUser(user){
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

export function setGenres(genre){
  return {
    type: 'genre/set',
    payload: genre
  }
}

const initValue = {
  user: {},
  isAuthenticated: false,
  moviesFilter: {
    genre: 0
  }
};

function reducer(state=initValue, action){
  switch(action.type){
    case "user/add":
      return {...state, user: action.payload}
    case "auth/status":
      return {...state, isAuthenticated: action.payload}
    case "genre/set":
      return {...state, moviesFilter: { ...state.moviesFilter, genre: action.payload }}
    default:
      return state;
  }
}

export default reducer;