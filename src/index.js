import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import $ from "jquery";

import Payees from "./payee/ra.payeecontroller.js";
import store from "./store/store.js";

const App = () => {
  $(function() {
    Payees.init();
  });
  return (
    <Provider store={store}>
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
