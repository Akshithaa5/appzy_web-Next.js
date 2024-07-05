// components/FreeTrialButton.js
import React from 'react';

const FreeTrialButton = () => {
  const handleFreeTrialClick = () => {
    // Handle free trial button click event
    console.log('Free trial button clicked');
  };

  return (
    <button
      className="bg-blue-700 text-white px-7 py-2 square-full hover:bg-green-600 transition duration-300"
      onClick={handleFreeTrialClick}
    >
      Free Trial
    </button>
  );
};

export default FreeTrialButton;
