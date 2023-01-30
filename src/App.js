import ScrollIntoView from "react-scroll-into-view";

import "./App.css";
import { Home, Question } from "./components";

import { questionsFixture } from "./fixture";

function App() {
  return (
    <div>
      <ScrollIntoView selector="#question-1">
        <Home id={"home"} />
      </ScrollIntoView>
      {questionsFixture.map((question) => {
        return (
          <ScrollIntoView selector={`#question-${question.id + 1}`}>
            <Question id={`#question-${question.id}`} />
          </ScrollIntoView>
        );
      })}
    </div>
  );
}

export default App;
