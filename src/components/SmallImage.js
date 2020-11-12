import React from "react";

const SmallImage = ({ src, alt }) => {
  return (
    <div className="gallery_icons">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SmallImage;
