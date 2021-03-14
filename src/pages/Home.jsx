import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Button, Header } from "semantic-ui-react";



export default function Home() {
  return (
    <div>
      <Header as="h1">Hello !</Header>

      <Button as={Link} to="/game" content="New Game"/>

    </div>
  );
}