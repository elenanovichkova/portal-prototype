import { combineReducers } from "redux";
import * as types from "../../actions/payee/actionTypes";

const domainRuleReducer = (state = { isFetching: false, data: {} }, action) => {
  switch (action.type) {
    case types.RECEIVED_DOMAIN_RULE:
      action.payload.data.rule.tins = action.payload.data.rule.tins.reduce(
        (acc, tin) => acc.concat([tin.id]),
        []
      );
      action.payload.data.rule.payers = action.payload.data.rule.payers.reduce(
        (acc, payer) => acc.concat([payer.id]),
        []
      );
      action.payload.data.rule.npis = action.payload.data.rule.npis.reduce(
        (acc, npi) => acc.concat([npi.id]),
        []
      );
      return {
        isFetching: false,
        data: action.payload.data.rule
      };
    case types.REQUEST_DOMAIN_RULE:
      return {
        isFetching: true,
        data: []
      };
    default:
      return state;
  }
};

const registeredTinsReducer = (
  state = { isFetching: false, data: [] },
  action
) => {
  switch (action.type) {
    case types.RECEIVED_REGISTERED_TINS:
      return {
        isFetching: false,
        data: action.payload.data.data
      };
    case types.REQUEST_REGISTERED_TINS:
      return {
        isFetching: true,
        data: []
      };
    default:
      return state;
  }
};

const payersReducer = (state = { isFetching: false, data: [] }, action) => {
  switch (action.type) {
    case types.RECEIVED_PAYERS:
      return {
        isFetching: false,
        data: action.payload.data.data
      };
    case types.REQUEST_PAYERS:
      return {
        isFetching: true,
        data: []
      };
    default:
      return state;
  }
};

const payeeReducers = combineReducers({
  domainRule: domainRuleReducer,
  registeredTins: registeredTinsReducer,
  payers: payersReducer
});

export default payeeReducers;
