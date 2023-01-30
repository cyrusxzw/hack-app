import "./choice.css";

const Choice = ({ choice }) => {
  const handleClick = (content) => {
    console.log(content);
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
