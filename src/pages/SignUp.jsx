import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin, signup } from "../firebase/firebase";

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const dispatch = useDispatch();

  return(
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header> S'inscrire </Header>
      <Form size="large">
        <Segment>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="User Name"
          />
          <Form.Input
            fluid
            icon="mail"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button secondary size="large">
            Sign up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already an account ? 😛
        <Button as={Link} to="/signin" content="Sign In" />

      </Message>
    </Grid.Column>
  </Grid>
  );
};

export default SignUp;
