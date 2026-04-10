import React from "react";

const Header = ({ showHint = true }) => {
  return (
    <div className="mb-3 md:mb-16">
      <h1 className="bg-gray-200 px-4 py-1 text-slate-600 sm:text-sm md:text-2xl lg:text-3xl font-medium tracking-widest border-t-4 border-slate-600">
        Random 30 Photos & Quotes
      </h1>
      {showHint && (
        <p className="mt-2 text-center text-sm md:text-base text-slate-500">
          Click on the image to see the quote.
        </p>
      )}
    </div>
  );
};

export default Header;
