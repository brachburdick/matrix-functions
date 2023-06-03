import React from 'react'


interface PanelProps {
    height: number;
    width: number;
    children?: React.ReactNode;
  }





const Panel: React.FC<PanelProps> = ({ children }) => {

  return (
    <div className = "panel" >
      {children}
    </div>
  );
};

export default Panel;