import cx from "classnames";
import { Heading } from "@aesop-engineering/gel";
import "./question.css";

import { Choice } from "./Choice/choice";

const Question = ({ id, isShow, question, choices, questionNumber }) => {
  const classSet = cx("question-wrapper", { active: isShow });
  return (
    <div className={classSet} id={id}>
      <Heading
        className="question-heading"
        level="3"
        size="large">{`${questionNumber}. ${question}`}</Heading>
      <div className="choice-wrapper">
        {choices.map((choice) => (
          <Choice choice={choice} key={choice.id} />
        ))}
      </div>
    </div>
  );
};

export { Question };
