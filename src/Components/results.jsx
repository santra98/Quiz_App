import React, { use } from 'react'

const Results = ({userAnswers, questionBank, restartQuiz}) => {

  const getScore = () => {
    let finalScore = 0;

    userAnswers?.forEach((element, index) => {
      if(element === questionBank[index].answer)
        finalScore++;
    });
    return finalScore;
  }
  const score = getScore();


  return (
    <div>
     <h1>Quiz Completed</h1>
     <p>Your Score: {score} /{questionBank?.length}</p>
     <button className='restart-button' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Results
