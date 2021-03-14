import { React, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";
import { signin, signup } from "../firebase/firebase";
import { appActions } from "../data/appActions";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";


const SignUp = () => {

  const [isSigningUp, setIsSigningUp] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    playerName: "",
  })

  const dispatch = useDispatch();


  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  
  const handleSubmit = (evt) => {
    signup(
      state.email,
      state.password,
      state.playerName,
      dispatch
    )
    evt.preventDefault();
  }

  return(
  <Grid textAlign="center" verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header> S'inscrire </Header>
      <Form size="large" onSubmit={handleSubmit}>
        <Segment>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="User Name"
            name='playerName'
            value={state.playerName}
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            icon="mail"
            iconPosition="left"
            placeholder="E-mail address"
            value={state.email}
            name='email'
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            name='password'
            value={state.password}
            onChange={handleInputChange}
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
