import ScrollIntoView from "react-scroll-into-view";
import { useState } from "react";
import "./App.css";
import { Home, Question, Result, Confirmation, Mutiple } from "./components";
import { extraQuestionsFixture, questionsFixture } from "./fixture";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [isShowResult, setIsShowResult] = useState(false);
  const [isShowExtraResult, setIsShowExtraResult] = useState(false);
  const [isShowMutipleChoice, setIsShowMutipleChoice] = useState(false);
  const [isShowConfirmation, setIsShowConfirmation] = useState(false);

  const handleClick = () => {
    setIsShow(true);
  };

  const handleLastQuestionClick = () => {
    setIsShowResult(true);
  };

  const handleResultClick = () => {
    setIsShowExtraResult(true);
  };

  const handleLastExtraQuestionClick = () => {
    setIsShowMutipleChoice(true);
  };

  const mutipleClick = () => {
    setIsShowConfirmation(true);
  };

  return (
    <>
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Aesop_logo_2013.svg"
        className="logo"
      />
      <ScrollIntoView selector="#question-1" onClick={handleClick}>
        <Home id="home" />
      </ScrollIntoView>
      {questionsFixture.map((question, index) => {
        const isLastQuestion = index === questionsFixture.length - 1;
        const selector = isLastQuestion
          ? "#skin-type"
          : `#question-${question.id + 1}`;

        return (
          <ScrollIntoView
            key={question.id}
            selector={selector}
            onClick={isLastQuestion && handleLastQuestionClick}>
            <Question
              id={`question-${question.id}`}
              isShow={isShow}
              questionNumber={question.id}
              question={question.question}
              choices={question.choices}
            />
          </ScrollIntoView>
        );
      })}
      <ScrollIntoView selector="#extra-question-1" onClick={handleResultClick}>
        <Result id="skin-type" isShow={isShowResult} />
      </ScrollIntoView>
      {extraQuestionsFixture.map((question, index) => {
        const isLastQuestion = index === extraQuestionsFixture.length - 1;
        const selector = isLastQuestion
          ? "#mutiple-choice"
          : `#extra-question-${question.id + 1}`;

        return (
          <ScrollIntoView
            key={question.id}
            selector={selector}
            onClick={isLastQuestion && handleLastExtraQuestionClick}>
            <Question
              id={`extra-question-${question.id}`}
              isShow={isShow && isShowExtraResult}
              question={question.question}
              choices={question.choices}
            />
          </ScrollIntoView>
        );
      })}
      <Mutiple
        id="mutiple-choice"
        isShow={isShowMutipleChoice}
        onClick={mutipleClick}
      />
      <Confirmation id={"confirmation"} isShow={isShowConfirmation} />
    </>
  );
}

export default App;
