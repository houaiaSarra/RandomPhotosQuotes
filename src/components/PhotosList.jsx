import React from "react";
import Photo from "./Photo";

const PhotosList = ({ photos, handlePhotoClick }) => {
  return (
    <div className=" md:w-11/12 h-4/5 md:h-auto grid grid-flow-row md:grid-flow-col px-4 md:pb-10 auto-cols-max overflow-y-scroll md:overflow-x-scroll snap-y md:snap-x md:scrollbar-thin md:scrollbar-thumb-gray-200 md:scrollbar-track-gray-500 md:hover:scrollbar-thumb-gray-300">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          photo={photo}
          handlePhotoClick={handlePhotoClick}
        />
      ))}
    </div>
  );
};

export default PhotosList;
