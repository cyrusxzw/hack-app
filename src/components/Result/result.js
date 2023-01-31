import cx from "classnames";
import { useState, useEffect } from "react";
import { Button } from "@aesop-engineering/gel";
import "./result.css";

const Result = ({ id, isShow }) => {
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const classSet = cx("skin-type", { active: isShow });
  const buttonClassSet = cx("next-step", { active: showButton });
  const imgClassSet = cx("skin-type-img", { active: showImage });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6500);

    const timerImage = setTimeout(() => {
      setShowImage(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerImage);
    };
  }, []);

  return (
    <div id={id} className={classSet}>
      <div className="typing">
        Your skin type & concern are: <br />
        <span className="skin-type-word">Combination & Sensitive</span>
      </div>
      <div className={imgClassSet}>
        <img
          alt="Combination Skin"
          src="https://picapica.id/wp-content/uploads/2020/04/combinationskinicon.png"
        />
        <img
          alt="Sensitive Skin"
          src="https://picapica.id/wp-content/uploads/2020/04/sensitifskinicon-768x768.png"
        />
      </div>
      <div>
        <Button className={buttonClassSet}>Let's explore further into your Skin</Button>
      </div>
    </div>
  );
};

export { Result };
