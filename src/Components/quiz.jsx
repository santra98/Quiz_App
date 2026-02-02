import { useState } from "react";
import Results from "./results";
import { use } from "react";

function Quiz() {
    const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "Javascript", "All"],
      answer: "All",
    },
    {
      question: "Who is the current CEO of Tesla?",
      options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
      answer: "Elon Musk",
    },
  ];


  const initialAnswers = [null, null, null]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const selectedAnswers = userAnswers[currentQuestion];

  const handleSelectOption = (option) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  } 

  const goToNext = () => {
    if(currentQuestion == questionBank?.length - 1) setIsQuizFinished(true);

    else setCurrentQuestion(currentQuestion + 1);
  }

   const goToPrevious = () => {
    if(currentQuestion > 0)
    setCurrentQuestion(currentQuestion - 1);
    
  }

  function restartQuiz()
  {
    setUserAnswers(initialAnswers);
setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  if(isQuizFinished)
  {
    return (<Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>);
  }

    return (
    <div>
        <h2>Question {currentQuestion}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option,index) => (
        <button 
        className={"option" + (selectedAnswers === option ? " selected" : "")} 
        key={index} onClick={() => handleSelectOption(option)}>{option}</button>

        ))}
        <div className="nav-buttons">
          <button onClick={() => goToPrevious()}>Previous</button>
          <button onClick={() => goToNext()} disabled={!selectedAnswers}>
            {currentQuestion == questionBank?.length - 1 ? "Finish" : "Next"}
            </button>
        </div>
    </div>
    );
}

export default Quiz;