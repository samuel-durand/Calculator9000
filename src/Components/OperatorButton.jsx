
function OperatorButton(props) {
  const { onClick } = props;
  const operatorButtons = ["+", "-", "*", "/"];

  return (
    <div>
      {operatorButtons.map((operator, index) => (
        <button className="operator" key={index} onClick={() => onClick(operator)}>
          {operator}
        </button>
      ))}
    </div>
  );
}

export default OperatorButton;
