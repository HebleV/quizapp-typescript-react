import React from 'react';
import QuestionCard from './components/QuestionCard';

function App() {
  const startQuiz = () => {

  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className='start' onClick={startQuiz}>Start Quiz</button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
