import { React, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../firebase/api";
import Gameplay from "../components/GamePlay";
import { incrementPlayerNbPlayed } from "../data/playerActions";
import {
  Container,
  Header,
  Segment,
  Button
} from "semantic-ui-react";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(-1);
  const dispatch = useDispatch();

  const getNewGame = () => {
    api.getQuestions().then((questions) => {
      if (questions === null) {
        alert("Error");
      } else {
        setAnswers([]);
        setScore(-1);
        setQuestions(questions);
        console.log(questions);
      }
    });
  };
  
  const finishGame = async (answers) => {
    const score = await api.submitAnswers(answers);
    setScore(score);
    setAnswers(answers);
    console.log("Score:", score);
    dispatch(incrementPlayerNbPlayed());
  };
  return (
    <div>
      <Container>
      {answers && answers.length > 0 ? (
          <Segment>
            <Header as="h2">Votre score: {score}</Header>
            <Header as="h3">Merci d'avoir joué</Header>
            <Button onClick={() => getNewGame()}>New Game</Button>
          </Segment> 
      ) : questions && questions.length > 0 ? (
         <Gameplay questions={questions} finishGame={finishGame} />
      ) : (
        <div>
          <Header as="h1">Hello !</Header>
          <Button onClick={() => getNewGame()}>New Game</Button>
        </div>
      )}
    </Container>
    </div>
  );
}