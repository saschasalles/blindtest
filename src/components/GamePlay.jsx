import React, { useState } from "react";
import Question from "./Question";
import { Container } from "semantic-ui-react";

const Gameplay = ({ questions, finishGame }) => {
  // answers: { questionId, choice, time }
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [startTime, setStartTime] = useState(new Date().getTime());

  const currentQuestion = questions[currentQuestionIndex];
  const chooseAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    console.log(questions.length, currentQuestionIndex);
    if (questions.length - 1 > currentQuestionIndex) {
      setAnswers(newAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setStartTime(new Date().getTime());
    } else {
      finishGame(newAnswers);
    }
  };
  return (
    <Container>
      <Question
        data={currentQuestion}
        chooseAnswer={chooseAnswer}
        startTime={startTime}
      />
    </Container>
  );
};

export default Gameplay;
