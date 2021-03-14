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
        <Button as={Link} to="/signup" content="Sign In" />
      </Message>
    </Grid.Column>
  </Grid>
);

export default SingIn;
