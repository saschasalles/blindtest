import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import Profile from "../src/pages/Profile";
import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "../src/data/store";
import { launchApp } from "../src/data/appEffects";
import { Redirect } from 'react-router-dom';

function App() {
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
            {isAuthenticated ? <Home/> : <SignIn />}
            </Route>
            <Route path="/signin">
              {isAuthenticated ? <Redirect to="/" /> : <SignIn />}
            </Route>
            <Route path="/signup">
              {isAuthenticated ? <Redirect to="/" /> : <SignUp />}
            </Route>
            <Route path="/profile">
              {isAuthenticated ? <Profile/> : <SignIn />}
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