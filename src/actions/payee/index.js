import axios from "axios";
import * as types from "./actionTypes";
import { SubmissionError } from "redux-form";

const ROOT_URL = "external/api";

export function getDomainRule(domainId) {
  let url = `${ROOT_URL}/domainRuledomain0.json`;
  console.log(domainId);
  //let request = axios.get(url);
  //action creator, it needs to return an action, an object with a type property
  return function(dispatch) {
    dispatch({ type: types.REQUEST_DOMAIN_RULE });
    axios.get(url).then(response => {
      dispatch({
        type: types.RECEIVED_DOMAIN_RULE,
        payload: response
      });
    });
  };
}

export function getRegisteredTins() {
  let url = `${ROOT_URL}/registeredTins.json`;
  return function(dispatch) {
    dispatch({ type: types.REQUEST_REGISTERED_TINS });
    axios.get(url).then(response => {
      dispatch({
        type: types.RECEIVED_REGISTERED_TINS,
        payload: response
      });
    });
  };
}

export function getPayers() {
  let url = `${ROOT_URL}/payers.json`;
  return function(dispatch) {
    dispatch({ type: types.REQUEST_PAYERS });
    axios.get(url).then(response => {
      dispatch({
        type: types.RECEIVED_PAYERS,
        payload: response
      });
    });
  };
}
