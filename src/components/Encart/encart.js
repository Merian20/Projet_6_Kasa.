import React, { useState } from 'react';
import './encart.scss';
import Vector from './../../assets/Vector.png'

function Encart({ title, content, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='encart-body'>
      <div className="encart">
        <h3>{title}</h3>
        <div className="arrow-container" onClick={toggleExpand}>
          <img src={Vector} alt="Arrow Right" className={isExpanded ? 'rotate' : ''} />
        </div>
      </div>
      {isExpanded && (
          <div className={`expanded-content ${isExpanded ? 'expanded' : ''}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Encart;