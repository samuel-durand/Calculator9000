function NumberButton(props) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    const handleClick = (number) => {
      console.log("Number clicked: " + number);
    };
  
    return (
      <div>
        {numbers.map((number, index) => (
          <h2 key={index} onClick={() => handleClick(number)}>
            {number}
          </h2>
        ))}
      </div>
    );
  }
  
  export default NumberButton;
  