import "./App.css";
import Layout from "./components/Layout";
import { Container, Header, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";

function App() {
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
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
