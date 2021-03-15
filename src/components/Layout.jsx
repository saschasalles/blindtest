import {
  Container,
  Header,
  Menu,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const isAuthenticated = useSelector(
    (state) => state.app.user !== null
  );

  return (
    <div>
      <Menu fixed="top" >
        <Container>
          <Menu.Item header>
            <Header as="h2" >
              Blind Test
            </Header>
          </Menu.Item>


          { isAuthenticated ? 
          <>
            <Menu.Item as={Link} to="/">
              Accueil
            </Menu.Item>
            <Menu.Item as={Link} to="/profile">
              Profile
            </Menu.Item>
          </>
          :
            <>
              <Menu.Item as={Link} to="/signup">
                Inscription
              </Menu.Item>
              <Menu.Item as={Link} to="/signin">
                Connexion
              </Menu.Item>
            </>
          }
        </Container>
      </Menu>

      <Container text style={{ marginTop: "7em" }}>
        {children}
      </Container>

      <Segment
        secondary
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <h2> Fait avec ❤️ par  Sascha Sallès et Théo Delas</h2>
          ©2001-2021 copyright Théo et Sacha. All right reserved lol.
        </Container>
      </Segment>
    </div>
  );
}
