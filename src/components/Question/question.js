import cx from "classnames";
import "./question.css";

import { Choice } from "./Choice/choice";

const Question = ({ id, isShow, question, choices }) => {
  const classSet = cx("question-wrapper", { active: isShow });
  const classChoiceSet = cx("choice-wrapper", { extra: id.includes("extra") });

  return (
    <div className={classSet} id={id}>
      <h3 className="question-heading" level="2" size="large">
        {question}
      </h3>
      <div className={classChoiceSet}>
        {choices.map((choice) => (
          <Choice choice={choice} key={choice.id} question={question} id={id} />
        ))}
      </div>
    </div>
  );
};

export { Question };
