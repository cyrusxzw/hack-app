import "./choice.css";

const Choice = ({ choice, question }) => {
  const handleClick = (content) => {
    localStorage.setItem(question, content);
  };

  return (
    <>
      {choice.url ? (
        <img
          alt={choice.content}
          onClick={() => handleClick(choice.content)}
          src={choice.url}
        />
      ) : (
        <div
          className="answer-content"
          onClick={() => handleClick(choice.content)}>
          {choice.content}
        </div>
      )}
    </>
  );
};

export { Choice };
