function NumberButton(props) {
    const numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    const handleClick = (number) => {
      console.log("Number clicked: " + number);
      if (props.onClick) {
        props.onClick(number);
      }
    }
  
    return (
      <div>
        {numbers.map((number, index) => (
          <button key={index} onClick={() => handleClick(number)}>
            {number}
          </button>
        ))}
      </div>
    );
  }
  
  export default NumberButton;
  