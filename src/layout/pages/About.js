import React, { Component } from "react";
import SmallImage from "../../components/SmallImage";

import "../../style/About.css";

import smallImg1 from "../../images/1.jpg";
import smallImg2 from "../../images/2.jpg";
import smallImg3 from "../../images/3.jpg";
import smallImg4 from "../../images/4.jpg";

const smallImages = [
  { src: smallImg1, alt: "Partycja 1" },
  { src: smallImg2, alt: "Partycja 2" },
  { src: smallImg3, alt: "Partycja 3" },
  { src: smallImg4, alt: "Partycja 4" },
];

class About extends Component {
  render() {
    const sideImages = smallImages.map((image) => (
      <SmallImage key={image.alt} src={image.src} alt={image.alt} />
    ));

    return (
      <section className="about">
        <article className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            corrupti aperiam facilis facere laboriosam. Corrupti ullam harum
            quaerat quo repellat, debitis, iusto alias, dolorem accusamus
            repudiandae molestiae dolores error incidunt! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Nostrum corrupti aperiam facilis
            facere laboriosam. Corrupti ullam harum quaerat quo repellat,
            debitis, iusto alias, dolorem accusamus repudiandae molestiae
            dolores error incidunt!
          </p>
        </article>
        <section className="workers first">
          <div className="portrait"></div>
          <div className="workers_about">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              accusantium voluptatum voluptatem aperiam quidem repellendus,
              veniam est magni. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vitae accusantium voluptatum voluptatem aperiam
              quidem repellendus, veniam est magni. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </section>
        <section className="workers secound">
          <div className="portrait"></div>
          <div className="workers_about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam magnam culpa aliquid nostrum veritatis inventore atque
              consequuntur, deleniti quod!
            </p>
          </div>
        </section>

        <section className="gallery">{sideImages}</section>
        {/* <section className="popup">
            <div className="popup_picture"></div>
          </section> */}
      </section>
    );
  }
}

export default About;
