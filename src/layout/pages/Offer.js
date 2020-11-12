import React, { useEffect } from "react";
import "../../style/Offer.css";

const Offer = () => {
  const showOption = (e) => {
    // console.log(e.target);
    e.target.style.opacity = 0;
  };

  useEffect(() => {
    document
      .querySelectorAll(".option_front")
      .forEach((front) => front.addEventListener("click", showOption));
  }, []);

  return (
    <section className="offer">
      <section className="option">
        <div className="option_container">
          <h3>Pakiet I</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            perferendis, sapiente cupiditate voluptatum molestiae magni
            praesentium dicta corrupti, alias dolor voluptates veritatis rem
            amet fuga similique dolorem nisi doloremque dolores.
          </p>
        </div>
        <div className="option_front">
          <div className="option_title">
            <h3>PAKIET I</h3>
            <h3>
              x zł/m<span>2</span>
            </h3>
          </div>
        </div>
      </section>
      <div className="stripe_offer"></div>
      <section className="option">
        <div className="option_container">
          <h3>Pakiet II</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            perferendis, sapiente cupiditate voluptatum molestiae magni
            praesentium dicta corrupti, alias dolor voluptates veritatis rem
            amet fuga similique dolorem nisi doloremque dolores.
          </p>
        </div>
        <div className="option_front">
          <div className="option_title">
            <h3>PAKIET II</h3>
            <h3>
              x zł/m<span>2</span>
            </h3>
          </div>
        </div>
      </section>
      <div className="stripe_offer"></div>
      <section className="option">
        <div className="option_container">
          <h3>Pakiet III</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            perferendis, sapiente cupiditate voluptatum molestiae magni
            praesentium dicta corrupti, alias dolor voluptates veritatis rem
            amet fuga similique dolorem nisi doloremque dolores.
          </p>
        </div>
        <div className="option_front">
          <div className="option_title">
            <h3>PAKIET III</h3>
            <h3>
              x zł/m<span>2</span>
            </h3>
          </div>
        </div>
      </section>
      <div className="stripe_offer"></div>{" "}
      <section className="option">
        <div className="option_container">
          <h3>Pakiet IV</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            perferendis, sapiente cupiditate voluptatum molestiae magni
            praesentium dicta corrupti, alias dolor voluptates veritatis rem
            amet fuga similique dolorem nisi doloremque dolores.
          </p>
        </div>
        <div className="option_front">
          <div className="option_title">
            <h3>PAKIET IV</h3>
            <h3>
              x zł/m<span>2</span>
            </h3>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Offer;
