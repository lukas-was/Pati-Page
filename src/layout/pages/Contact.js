import React, { Component } from "react";
import GoogleMap from "../../components/GoogleMap";

import "../../style/Contact.css";

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <section className="contact_container">
          <h3>KONTAKT</h3>
          <div className="adress">
            <p>adres:</p>
            <p>xyz</p>
            <p>00-000 Gdynia</p>
          </div>
          <div className="email">
            <p>e-mail:</p>
            <p>corenstudiodesign@gmail.com</p>
          </div>
          <div className="tel">
            <p>telefon:</p>
            <p>666 666 666</p>
          </div>
          <div className="social_media">
            <a
              href="https://www.facebook.com/profile.php?id=100000829035383"
              target="blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100000829035383"
              target="blank"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
        </section>

        <section className="map">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15577.920652841005!2d18.54024100648887!3d54.52164998928887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda145071ed789%3A0xdee2f99989236636!2sGdynia!5e0!3m2!1spl!2spl!4v1605360110589!5m2!1spl!2spl"
            style={{ width: 500, height: 500, border: 0 }}
            frameborder={0}
            allowfullscreen=""
            aria-hidden={false}
            tabindex={0}
          ></iframe> */}
          <GoogleMap />
        </section>
      </section>
    );
  }
}

export default Contact;
