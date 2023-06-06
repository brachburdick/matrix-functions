import React from 'react'
import {Fixture} from '../components/Fixture'

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