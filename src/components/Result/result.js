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
        Your skin type is: <span className="skin-type-word">Combination</span>
      </div>
      <div className={imgClassSet}>
        <img
          alt="Combination Skin"
          src="https://shopify-blog.s3.us-east-2.amazonaws.com/1507870153_5.jpg"
        />
      </div>
      <div>
        <Button className={buttonClassSet}>Next step</Button>
      </div>
    </div>
  );
};

export { Result };
