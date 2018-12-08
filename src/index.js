import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import $ from "jquery";

import reducers from "./reducers";
import Payees from "./payee/ra.payeecontroller.js";

const middleware = [thunk, ReduxPromise, logger];

const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);

const App = () => {
  $(function() {
    Payees.init();
  });
  return (
    <Provider store={createStoreWithMiddleWare(reducers)}>
      <div>
        <div className="container">
          <div id="payees">
            <table id="payee-main" className="display">
              <thead>
                <tr>
                  <th />
                  <th>Folder Names</th>
                  <th>Bank Name</th>
                  <th>Routing Number</th>
                  <th>Account Number</th>
                  <th>Status</th>
                  <th>ERA setting</th>
                  <th>LOG</th>
                  <th>DELETE</th>
                  <th>Enroll Rule</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
