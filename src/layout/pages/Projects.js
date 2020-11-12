import React, { Component } from "react";
import "../../style/Projects.css";

class Projects extends Component {
  first = 0;
  secound = 0;
  third = 0;
  fourth = 0;

  moveGallery = (e, number) => {
    if (e.deltaY === 100 && this[number] > -60) this[number] -= 10;
    if (e.deltaY === -100 && this[number] < 0) this[number] += 10;
    const container = document.querySelector(`.${number}_container`);
    container.style.transform = `translateY(${this[number]}%)`;
  };

  render() {
    console.log("render");
    return (
      <section className="projects">
        <section className="projects_gallery">
          <div
            onWheel={(e) => this.moveGallery(e, "first")}
            className="projects_container first_container"
          >
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
          </div>
        </section>
        <div className="stripe"></div>
        <section className="projects_gallery">
          <div
            onWheel={(e) => this.moveGallery(e, "secound")}
            className="projects_container secound_container"
          >
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
          </div>
        </section>
        <div className="stripe"></div>
        <section className="projects_gallery">
          <div
            onWheel={(e) => this.moveGallery(e, "third")}
            className="projects_container third_container"
          >
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
          </div>
        </section>
        <div className="stripe"></div>
        <section className="projects_gallery">
          <div
            onWheel={(e) => this.moveGallery(e, "fourth")}
            className="projects_container fourth_container"
          >
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
          </div>
        </section>
      </section>
    );
  }
}

export default Projects;
