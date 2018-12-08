import { combineReducers } from "redux";
import * as types from "../../actions/payee/actionTypes";

const ruleReducer = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVED_DOMAIN_RULE:
      return action.payload;
    default:
      return state;
  }
};

const payeeReducers = combineReducers({
  rule: ruleReducer
});

export default payeeReducers;
