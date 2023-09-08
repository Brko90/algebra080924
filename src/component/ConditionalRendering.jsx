import React from 'react';

function ConditionalRendering(props) {
  const { number } = props; 

  return (
    <div>
      <h3>Conditional Rendering</h3>
      {number === undefined ? (
        <p>Nista.</p>
      ) : number > 5 ? (
        <p>Broj je veći od 5.</p>
      ) : (
        <p>Broj je manji ili jednak 5.</p>
      )}
    </div>
  );
}

export default ConditionalRendering;
