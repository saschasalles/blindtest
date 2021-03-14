import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const SingIn = () => (
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header> Se connecter</Header>
      <Form size="large">
        <Segment>
          <Form.Input
            fluid
            icon="user"
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
);

export default SingIn;
