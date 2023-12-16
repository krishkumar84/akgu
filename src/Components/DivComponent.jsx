import React, { useState, useEffect } from 'react';

export const DivComponent = () => {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowDiv(false);
    }, 1000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div>
      {showDiv && <div className='h-[3vh]'></div>}
    </div>
  );
};