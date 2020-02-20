import * as actionType from "./actionTypes";

const spaceXData = [];

export function getSpaceXDataReducer(state = spaceXData, action) {
  
  switch (action.type) {
    case actionType.GET_SPACEX_DATA:
      return action.payload;
    default:
      return state;
  }
}


