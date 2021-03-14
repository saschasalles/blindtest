import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../firebase/firebase";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const SignIn = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();


  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  const handleSubmit = (evt) => {
    signin(
      state.email,
      state.password,
      dispatch
    )
    evt.preventDefault();
  }

  return(
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header> Se connecter</Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              name="email"
              placeholder="E-mail address"
              value={state.email}
              onChange={handleInputChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              name="password"
              placeholder="Password"
              type="password"
              value={state.password}
              onChange={handleInputChange}
            />

            <Button secondary size="large">
              Sign in
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?
          <Button as={Link} to="/signup" content="Sign Up" />
        </Message>
      </Grid.Column>
    </Grid>
  )
};

export default SignIn;
