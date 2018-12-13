import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import ReduxPromise from "redux-promise";
import reducers from "../reducers";

const middleware = [thunk, logger, ReduxPromise];

const store = applyMiddleware(...middleware)(createStore)(reducers);

export default store;
