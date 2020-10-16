import React, { useState } from 'react';
import { fetchQuizQuestions } from '../src/api';
import QuestionCard from './components/QuestionCard';
import { QuestionState, Difficulty } from './api';
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {
  const TOTAL_QUESTIONS = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      //Users answer
      const answer = e.currentTarget.value;
      //Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //Set score
      if (correct) {
        setScore(prev => prev + 1);
      }
      //Save answer
      const AnswerObject = {
        question: questions[number].correct_answer,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers((prev) => [...prev, AnswerObject]);
    }
  }

  const nextQuestion = () => {
    //Move onto next question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Quiz App</h1>
        {gameover || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='start' onClick={startQuiz}>Start Quiz</button>
        ) : null}

        {!gameover ? <p className='score'>Score:{score}</p> : null}
        {loading && <p>Loading Questions...</p>}
        {!loading && !gameover && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            callback={checkAnswer}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
          />
        )}
        <button className='next' onClick={nextQuestion}>Next Question</button>
      </Wrapper>
    </>
  );
}

export default App;
