import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// styling
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/antd/dist/antd.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import '../node_modules/font-awesome/css/font-awesome.min.css'

// Redux
import { Provider } from "react-redux";
//import store from './redux/store'
import { store, persistor } from "./redux/LAMA/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
