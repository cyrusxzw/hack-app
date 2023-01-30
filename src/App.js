import ScrollIntoView from "react-scroll-into-view";
import { useState } from "react";
import "./App.css";
import { Home, Question, Result } from "./components";

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
      {questionsFixture.map((question, index) => {
        const selector =
          index === questionsFixture.length - 1
            ? "#skin-type"
            : `#question-${question.id + 1}`;

        return (
          <ScrollIntoView key={question.id} selector={selector}>
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
      <ScrollIntoView>
        <Result id="skin-type" />
      </ScrollIntoView>
    </>
  );
}

export default App;
