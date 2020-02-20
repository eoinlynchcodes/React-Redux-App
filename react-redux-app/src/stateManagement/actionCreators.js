import * as actionType from "./actionTypes";
import axios from "axios";
import { connect } from "react-redux";

const spaceXAPI = "https://api.spacexdata.com/v3/launches";

export const getSpaceXDataActionCreator = () => dispatch => {
    // this dispatch goes to the reducer.

    // dispatch({
    //     type: actionType.GET_SPACEX_DATA
    // })

  axios
    .get(spaceXAPI)
    .then(response => {
      dispatch({ type: actionType.GET_SPACEX_DATA, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    });
};
