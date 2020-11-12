import React, { Component } from "react";

import "../../style/Home.css";

import HomeImage from "../../components/HomeImage";

import img1 from "../../images/projects_small/1.jpg";

const animationTime = 7000;

// uzupelnij alt'y i pozmieniaj src po zaimportowaniu obrazkow
const data = [
  {
    id: 1,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 2,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 3,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 4,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 5,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 6,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 7,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 8,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 9,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 10,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 11,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 12,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 13,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 14,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 15,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 16,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 17,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 18,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 19,
    className: "image",
    src: img1,
    alt: "",
  },
  {
    id: 20,
    className: "imageS",
    src: img1,
    alt: "",
  },
  {
    id: 21,
    className: "imageS",
    src: img1,
    alt: "",
  },
];

class Home extends Component {
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
    const images = data.map((object) => (
      <HomeImage key={object.id} object={object} />
    ));
    return (
      <section className="home">
        <div className="image_container">{images}</div>
      </section>
    );
  }
}
export default Home;

// class Home extends Component {
//   valueZ = 0;

//   getPosition = (e) => {
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

//   setPosition = (e) => {
//     const container = document.querySelector(".image_container");
//     const position = this.getPosition(e);

//     const X = position.xProcent / 20;
//     const Y = position.yProcent / 10;

//     container.style.transform = `translate(${-50 - X}%, ${-50 + Y}%)`;
//   };

//   zoomInAndOut = (e) => {
//     const images = [...document.querySelectorAll(".image_container div")];

//     if (e.deltaY === 100 && this.valueZ < 120) this.valueZ += 15;
//     if (e.deltaY === -100 && this.valueZ > 0) this.valueZ -= 15;

//     images.forEach(
//       (image) => (image.style.transform = `translateZ(${this.valueZ}px)`)
//     );
//   };

//   componentDidMount() {
//     window.addEventListener("mousemove", this.setPosition);
//     this.indexTime = setTimeout(() => {
//       window.addEventListener("mousewheel", this.zoomInAndOut);
//     }, animationTime);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("mousemove", this.setPosition);
//     window.removeEventListener("mousewheel", this.zoomInAndOut);
//     clearTimeout(this.indexTime);
//   }

//   render() {
//     const images = data.map((object) => <HomeImage object={object} />);
//     return (
//       <section className="home">
//         <div className="image_container">
//           <div className="image">
//             <Link to="/projects/1">
//               <img src={img1} alt="" />
//             </Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/2">link</Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/3">link</Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/4">
//               <img src={img1} alt="" />
//             </Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/5">
//               <img src={img1} alt="" />
//             </Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/6">link</Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/7">link</Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/8">link</Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/9">
//               <img src={img1} alt="" />
//             </Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/10">link</Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/11">
//               <img src={img1} alt="" />
//             </Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/12">link</Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/13">link</Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/14">link</Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/15">
//               <img src={img1} alt="" />
//             </Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/16">link</Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/17">link</Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/18">
//               <img src={img1} alt="" />
//             </Link>
//           </div>
//           <div className="image">
//             <Link to="/projects/19">link</Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/20">link</Link>
//           </div>
//           <div className="imageS">
//             <Link to="/projects/21">link</Link>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }
// export default Home;
