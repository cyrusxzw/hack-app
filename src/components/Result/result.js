import cx from "classnames";
import { useState, useEffect } from "react";
import { Button } from "@aesop-engineering/gel";
import "./result.css";

const Result = ({ id, isShow }) => {
  const [showButton, setShowButton] = useState(false);

  const classSet = cx("skin-type", { active: isShow });
  const buttonClassSet = cx("next-step", { active: showButton });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id={id} className={classSet}>
      <div className="typing">Your skin type is: xxxx</div>
      <div>
        <Button className={buttonClassSet}>Next step</Button>
      </div>
    </div>
  );
};

export { Result };
