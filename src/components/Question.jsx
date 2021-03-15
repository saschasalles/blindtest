import React, { useEffect, useState } from "react";
import { Card, Container, Menu, Segment } from 'semantic-ui-react';
import ReactAudioPlayer from 'react-audio-player';

const Question = ({ data, chooseAnswer, startTime }) => {
  const [sound, setSound] = useState();
  const colors = ['red', 'olive', 'teal', 'purple']

  const makeChoice = (answerIndex) => {
    chooseAnswer({
      questionId: data.id,
      choice: data.answers[answerIndex],
      time: new Date().getTime() - startTime,
    });
  };

  const Answer = ({ answerIndex, color }) => (
        <Card

            image={{ uri: data.answers[answerIndex] }}
            description={data.answers[answerIndex]}
            onClick={() => makeChoice(answerIndex)}
            color={color}
        />
  );


  return (
    <Container>

    <Card.Group>
        <Card textAlign="center" inverted fluid>
            <Card.Content as="h3">
                {data.question}
            </Card.Content>
            <Card.Content extra>
            <ReactAudioPlayer
                src={data.audio_url}
                autoPlay
                controls
                volume={0.4}
                />
            </Card.Content>
        </Card>


    </Card.Group>

        <Card.Group centered>
            <Answer answerIndex={0} color={colors[0]}/>
            <Answer answerIndex={1} color={colors[1]}/>
            <Answer answerIndex={2} color={colors[2]}/>
            <Answer answerIndex={3} color={colors[3]} />
        </Card.Group>

    </Container>

  );
};

export default Question;
