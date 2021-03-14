import "./App.css";
import Layout from "./components/Layout";
import { Container, Header, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import Profile from "../src/pages/Profile";
import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "../src/data/store";
import { launchApp } from "../src/data/appEffects";

function App() {
  const isLoading = useSelector((state) => state.app.isLoading);
  const isAuthenticated = useSelector((state) => state.app.user !== null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(launchApp());
  }, []);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

const ContextContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ContextContainer;