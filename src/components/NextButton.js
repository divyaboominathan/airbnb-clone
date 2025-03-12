import React from 'react';

const NextButton = ({ onClick }) => {
  return (
    <div className="flex items-center">
      <button
        aria-label="Next categories page"
        data-shared-element-id="next-button"
        type="button"
        onClick={onClick}
        className="p-2 focus:outline-none"
      >
        <span data-button-content="true" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="h-3 w-3 fill-current"
          >
            <path d="M5.41.3 4 1.7 10.3 8 4 14.3l1.41 1.4 6.6-6.58c.57-.58.6-1.5.1-2.13l-.1-.11z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default NextButton;