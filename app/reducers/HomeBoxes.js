import {FETCH_STATIC_DATA} from '../actions/HomeBoxesActions'
let initialState = {
  showLoader:true,
  staticData:{}
  
}
export const HomeBoxesReducer = (state = initialState,action) => {
  switch(action.type){
    case FETCH_STATIC_DATA:
    let newState = {
      ...initialState,
      showLoader:false,
      staticData:action.payload
    }
    return newState;
    break;

    default:
        return state;
  }
}
