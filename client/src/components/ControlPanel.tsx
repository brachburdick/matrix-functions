import React from 'react';

const ControlPanel: React.FC = () => {
  const handleClick = async (path: string) => {
    try {
      const response = await fetch(`http://localhost:3001${path}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <button onClick={() => handleClick('/init')}>Init</button>
      <button onClick={() => handleClick('/on')}>On</button>
      <button onClick={() => handleClick('/off')}>Off</button>
      <button onClick={() => handleClick('/disconnect')}>Disconnect</button>
    </div>
  );
};

export default ControlPanel;
