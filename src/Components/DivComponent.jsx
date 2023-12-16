import React, { useState, useEffect } from 'react';

export const DivComponent = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowDiv(true);
    }, 1000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div>
      {showDiv && <div className='h-[40vh]'></div>}
    </div>
  );
};