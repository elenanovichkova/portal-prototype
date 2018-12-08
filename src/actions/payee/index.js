import axios from "axios";
import * as types from "./actionTypes";
import { SubmissionError } from "redux-form";

const ROOT_URL = "external/api";

export function getDomainRule(domainId) {
  let url = `${ROOT_URL}/domainRule${domainId}.json`;
  console.log(domainId);
  //let request = axios.get(url);
  //action creator, it needs to return an action, an object with a type property
  return function(dispatch) {
    axios.get(url).then(response => {
      dispatch({
        type: types.RECEIVED_DOMAIN_RULE,
        payload: response
      });
    });
  };
}
