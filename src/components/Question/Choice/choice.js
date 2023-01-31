import cx from "classnames";
import "./choice.css";

const Choice = ({ choice, question, id }) => {
  const handleClick = (content) => {
    localStorage.setItem(question, content);
  };

  const classSet = cx("answer-content", { extra: id.includes("extra") });

  return (
    <>
      {choice.url ? (
        <img
          alt={choice.content}
          onClick={() => handleClick(choice.content)}
          src={choice.url}
        />
      ) : (
        <div className={classSet} onClick={() => handleClick(choice.content)}>
          {choice.content}
        </div>
      )}
    </>
  );
};

export { Choice };
