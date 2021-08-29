const initValue = {
  count: 0
};

function reducer(state=initValue, action){
  switch(action.type){
    case "inc":
      return {count: state.count + 1}
    default:
      return state;
  }
}

export default reducer;