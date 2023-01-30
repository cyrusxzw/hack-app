import cx from "classnames";
import { Heading } from "@aesop-engineering/gel";
import "./question.css";

const Question = ({ id, isShow, question, choices, questionNumber }) => {
  const classSet = cx("question-wrapper", { active: isShow });
  return (
    <div className={classSet} id={id}>
      <Heading
        level="3"
        size="large">{`${questionNumber}. ${question}`}</Heading>
    </div>
  );
};

export { Question };
