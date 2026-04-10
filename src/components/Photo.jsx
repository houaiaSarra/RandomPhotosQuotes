import React from "react";

const Photo = ({ photo, handlePhotoClick }) => {
  // console.log(photo);
  const {download_url, author } = photo;
  return (
    <div
      className=" md:mx-3 my-2 md:my-auto relative snap-center cursor-pointer md:scroll-ml-4"
      onClick={() => handlePhotoClick()}
    >
      <img
        src={download_url}
        alt=""
        className="h-52 md:h-80 w-72 md:w-80 lg:w-96 aspect-square rounded-2xl shadow-lg shadow-slate-800/50 hover:border-4"
      />
      <p className="text-gray-200 text-center tracking-widest text-sm md:text-xl absolute bottom-4 bg-slate-600 bg-opacity-70 px-3 py-1">
        {author}
      </p>
    </div>
  );
};

export default Photo;
