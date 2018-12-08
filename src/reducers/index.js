import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import payeeReducers from "./payee/payeeReducers";

export default combineReducers({
  payee: payeeReducers,
  form: formReducer
});
