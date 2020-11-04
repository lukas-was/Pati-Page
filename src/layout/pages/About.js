import React from "react";

import "../../style/About.css";

const About = () => {
  return (
    <section className="about">
      <article className="description">
        wspólny opis Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum corrupti aperiam facilis facere laboriosam. Corrupti ullam harum
        quaerat quo repellat, debitis, iusto alias, dolorem accusamus
        repudiandae molestiae dolores error incidunt!
      </article>
      <section className="workers">
        <article className="workers_first">
          <div className="portrait"></div>
          <p className="workers_about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            accusantium voluptatum voluptatem aperiam quidem repellendus, veniam
            est magni.
          </p>
        </article>
        <article className="workers_secound">
          <div className="portrait"></div>
          <p className="workers_about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            magnam culpa aliquid nostrum veritatis inventore atque consequuntur,
            deleniti quod!
          </p>
        </article>
      </section>
      <section className="gallery">
        <div className="gallery_picture"></div>
        <div className="gallery_picture"></div>
        <div className="gallery_picture"></div>
        <div className="gallery_picture"></div>
        <div className="gallery_picture"></div>
      </section>
    </section>
  );
};

export default About;
