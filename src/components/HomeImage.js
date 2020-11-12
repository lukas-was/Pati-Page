import React from "react";
import { Link } from "react-router-dom";

const HomeImage = (props) => {
  const { id, className, src, alt } = props.object;
  return (
    <div className={className}>
      <Link to={`/projects/${id}`}>
        <img src={src} alt={alt} />
      </Link>
    </div>
  );
};

export default HomeImage;
