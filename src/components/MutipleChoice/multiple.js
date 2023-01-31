import cx from "classnames";
import ScrollTo from "react-scroll-into-view";
import { Button } from "@aesop-engineering/gel";
import { useState } from "react";
import { mutipleChoice } from "../../fixture";
import "./multiple.css";

const Mutiple = ({ onClick, isShow, id }) => {
  const [selected, setSelected] = useState([]);

  const classSet = cx("multiple-question-wrapper", { active: isShow });

  const handleClick = (item) => {
    setSelected([...selected, item]);

    localStorage.setItem(mutipleChoice.question, [...selected, item]);
  };

  const next = () => onClick();

  return (
    <div className={classSet} id={id}>
      <h3 className="question-heading" level="2" size="large">
        {mutipleChoice.question}
      </h3>
      <div className="multiple-answer-wrapper">
        {mutipleChoice.choices.map((item) => {
          const isActive = selected.indexOf(item.content) !== -1;
          const classSet = cx("mutiple-choices", { active: isActive });

          return (
            <div className={classSet} onClick={() => handleClick(item.content)}>
              {item.content}
            </div>
          );
        })}
      </div>
      <ScrollTo selector="#confirmation" onClick={next}>
        <Button>See result</Button>
      </ScrollTo>
    </div>
  );
};

export { Mutiple };
