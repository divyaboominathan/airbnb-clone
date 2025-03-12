import React from 'react';

const PreviousButton = ({ onClick }) => {
  return (
    <div className="flex items-center">
      <button
        aria-label="Previous categories page"
        data-shared-element-id="previous-button"
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
            <path d="m10.55.3 1.42 1.4L5.67 8l6.3 6.3-1.42 1.4-6.59-6.58a1.58 1.58 0 0 1-.1-2.13l.1-.11z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default PreviousButton;