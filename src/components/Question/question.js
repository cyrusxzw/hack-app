import cx from "classnames";
import "./question.css";

import { Choice } from "./Choice/choice";

const Question = ({ id, isShow, question, choices, questionNumber }) => {
  const classSet = cx("question-wrapper", { active: isShow });

  return (
    <div className={classSet} id={id}>
      <h3
        className="question-heading"
        level="2"
        size="xxlarge">{`${questionNumber}. ${question}`}</h3>
      <div className="choice-wrapper">
        {choices.map((choice) => (
          <Choice choice={choice} key={choice.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export { Question };
