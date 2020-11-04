import React, { Component } from "react";

import "../../style/Page.css";

const animationTime = 7000;

class Page extends Component {
  valueZ = 0;

  getPosition = (e) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    const x = e.clientX;
    const y = e.clientY;

    const oX = Math.floor(-(windowWidth / 2 - x));
    const oY = Math.floor(windowHeight / 2 - y);

    const xProcent = Math.floor((oX / (windowWidth * 0.5)) * 100);

    const yProcent = Math.floor((oY / (windowHeight * 0.5)) * 100);

    return { xProcent, yProcent };
  };

  setPosition = (e) => {
    const container = document.querySelector(".image_container");
    const position = this.getPosition(e);

    const X = position.xProcent / 20;
    const Y = position.yProcent / 10;

    container.style.transform = `translate(${-50 - X}%, ${-50 + Y}%)`;
  };

  zoomInAndOut = (e) => {
    const images = [...document.querySelectorAll(".image_container div")];

    if (e.deltaY === 100 && this.valueZ < 120) this.valueZ += 15;
    if (e.deltaY === -100 && this.valueZ > 0) this.valueZ -= 15;

    images.forEach(
      (image) => (image.style.transform = `translateZ(${this.valueZ}px)`)
    );
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.setPosition);
    this.indexTime = setTimeout(() => {
      window.addEventListener("mousewheel", this.zoomInAndOut);
    }, animationTime);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.setPosition);
    window.removeEventListener("mousewheel", this.zoomInAndOut);
    clearTimeout(this.indexTime);
  }

  render() {
    return (
      <div className="image_container">
        <div className="image"></div>
        <div className="image"></div>
        <div className="imageS"></div>
        <div className="imageS"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="imageS"></div>
        <div className="image"></div>
        <div className="imageS"></div>
        <div className="imageS"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="imageS"></div>
        <div className="imageS"></div>
        <div className="imageS"></div>
        <div className="image"></div>
        <div className="image"></div>
        <div className="imageS"></div>
        <div className="imageS"></div>
      </div>
    );
  }
}
export default Page;

// import React, { Component } from "react";
// import "../../style/Page.css";

// const Page = () => {
//   let valueZ = 0;

//   const getPosition = (e) => {
//     const windowHeight = window.innerHeight;
//     const windowWidth = window.innerWidth;

//     const x = e.clientX;
//     const y = e.clientY;

//     const oX = Math.floor(-(windowWidth / 2 - x));
//     const oY = Math.floor(windowHeight / 2 - y);

//     const xProcent = Math.floor((oX / (windowWidth * 0.5)) * 100);

//     const yProcent = Math.floor((oY / (windowHeight * 0.5)) * 100);

//     return { xProcent, yProcent };
//   };

//   const setPosition = (e) => {
//     const container = document.querySelector(".image_container");
//     const position = getPosition(e);

//     const X = position.xProcent / 20;
//     const Y = position.yProcent / 10;

//     container.style.transform = `translate(${-50 - X}%, ${-50 + Y}%)`;
//   };

//   const zoomInAndOut = (e) => {
//     const images = [...document.querySelectorAll(".image_container div")];

//     if (e.deltaY === 100 && valueZ < 120) valueZ += 15;
//     if (e.deltaY === -100 && valueZ > 0) valueZ -= 15;

//     images.forEach(
//       (image) => (image.style.transform = `translateZ(${valueZ}px)`)
//     );
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", setPosition);
//     setTimeout(() => {
//       window.addEventListener("mousewheel", zoomInAndOut);
//     }, 7000);
//     return () => {
//       window.removeEventListener("mousemove", setPosition);
//       window.removeEventListener("mousewheel", zoomInAndOut);
//     };
//   });

//   return (
//     <div className="image_container">
//       <div className="image"></div>
//       <div className="image"></div>
//       <div className="imageS"></div>
//       <div className="imageS"></div>
//       <div className="image"></div>
//       <div className="image"></div>
//       <div className="image"></div>
//       <div className="imageS"></div>
//       <div className="image"></div>
//       <div className="imageS"></div>
//       <div className="imageS"></div>
//       <div className="image"></div>
//       <div className="image"></div>
//       <div className="image"></div>
//       <div className="imageS"></div>
//       <div className="imageS"></div>
//       <div className="imageS"></div>
//       <div className="image"></div>
//       <div className="image"></div>
//       <div className="imageS"></div>
//       <div className="imageS"></div>
//     </div>
//   );
// };

// export default Page;
