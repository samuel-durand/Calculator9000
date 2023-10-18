import React from 'react';

function EqualButton(props) {
  const handleEqualClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    console.log('Bouton Equal cliqué');
  };

  return (
    <button onClick={handleEqualClick}>
      =
    </button>
  );
}

export default EqualButton;
