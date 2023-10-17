function OperatorButton(props) {
    const operatorButtons = ["+", "-", "*", "/"];
  
    const handleClick = (operator) => {
      console.log("Operator clicked: " + operator);
    };
  
    return (
      <div>
        {operatorButtons.map((operator, index) => (
          <h2 key={index} onClick={() => handleClick(operator)}>
            {operator}
          </h2>
        ))}
      </div>
    );
  }
  
  export default OperatorButton;
  