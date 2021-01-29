import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import "./index.css";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import MainScreen from "./screens/mainScreen";
import DummyScreen from "./screens/dummyScreen";
import UsMap from "./screens/usMap";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <Header></Header>
          <div className="container-fluid">
            <div className="row">
              <Sidebar></Sidebar>
              <Switch>
                <Route exact path="/">
                  <MainScreen />
                </Route>
                <Route path="/dummy">
                  <DummyScreen />
                </Route>
                <Route path="/usmap">
                  <UsMap />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
