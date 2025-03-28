import React, { useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assests/data';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(data[currentIndex] || {});
  const [isLocked, setIsLocked] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const refOption1 = useRef(null);
  const refOption2 = useRef(null);
  const refOption3 = useRef(null);
  const refOption4 = useRef(null);

  const optionsArray = [refOption1, refOption2, refOption3, refOption4];

  const handleAnswerSelection = (event, selectedAnswer) => {
    if (!isLocked) {
      if (currentQuestion.ans === selectedAnswer) {
        event.target.classList.add("correct");
        setTotalScore(prevScore => prevScore + 1);
      } else {
        event.target.classList.add("wrong");
        if (optionsArray[currentQuestion.ans - 1]?.current) {
          optionsArray[currentQuestion.ans - 1].current.classList.add("correct");
        }
      }
      setIsLocked(true);
    }
  };

  const moveToNextQuestion = () => {
    if (isLocked) {
      if (currentIndex === data.length - 1) {
        setIsCompleted(true);
        return;
      }
      setCurrentIndex(prevIndex => prevIndex + 1);
      setCurrentQuestion(data[currentIndex + 1]);
      setIsLocked(false);
      optionsArray.forEach(option => {
        if (option.current) {
          option.current.classList.remove("wrong", "correct");
        }
      });
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setCurrentQuestion(data[0]);
    setTotalScore(0);
    setIsLocked(false);
    setIsCompleted(false);
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      {!isCompleted ? (
        <>
          <h2>{currentIndex + 1}. {currentQuestion.questions}</h2>
          <ul>
            <li ref={refOption1} onClick={(e) => handleAnswerSelection(e, 1)}>{currentQuestion.option1}</li>
            <li ref={refOption2} onClick={(e) => handleAnswerSelection(e, 2)}>{currentQuestion.option2}</li>
            <li ref={refOption3} onClick={(e) => handleAnswerSelection(e, 3)}>{currentQuestion.option3}</li>
            <li ref={refOption4} onClick={(e) => handleAnswerSelection(e, 4)}>{currentQuestion.option4}</li>
          </ul>
          <button onClick={moveToNextQuestion} type='button'>Next</button>

          <div className="index">
            {currentIndex + 1} of {data.length} questions
          </div>
        </>
      ) : (
        <>
          <h2>Your score is {totalScore} out of {data.length}.</h2>
          <button onClick={restartQuiz}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Quiz;
