let initialState = {
  HomeBoxe:'HomeBoxesReducer',
  counter:1
}
export const HomeBoxesReducer = (state = initialState,action) => {
  switch(action.type){
    case "testing":
    let newState = {
      ...initialState,
      HomeBoxe:'New',
      counter:action.payload
    }
    return newState;
    break;

    default:
        return state;
  }
  return state;
}
