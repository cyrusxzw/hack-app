import ScrollIntoView from "react-scroll-into-view";
import { useState } from "react";
import "./App.css";
import { Home, Question } from "./components";

import { questionsFixture } from "./fixture";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(true);
  };

  return (
    <>
      <ScrollIntoView selector="#question-1" onClick={handleClick}>
        <Home id="home" />
      </ScrollIntoView>
      {questionsFixture.map((question) => (
        <ScrollIntoView
          key={question.id}
          selector={`#question-${question.id + 1}`}>
          <Question
            id={`question-${question.id}`}
            isShow={isShow}
            questionNumber={question.id}
            question={question.question}
            choices={question.choices}
          />
        </ScrollIntoView>
      ))}
    </>
  );
}

export default App;
