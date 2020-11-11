import React from "react";

const SmallImage = ({ src, alt }) => {
  return (
    <div className="gallery_picture">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SmallImage;
