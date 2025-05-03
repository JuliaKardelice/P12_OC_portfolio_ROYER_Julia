import React from "react";
import portrait from "../../../public/assets/images/self_picture.jpg";
import "./aboutSection.scss";

export const AboutSection: React.FC = () => {
  return (
    <>
      <div id="introduction" className="container">
        <figure>
          <img className="portrait-img" src={portrait} alt="Photo de profil de Royer Julia" />

        </figure>
        <article>
          <h1>Developpeuse Font-End</h1>

          <p>
            Je m'appelle <strong>Julia Royer</strong>, développeuse front-end de
            29 ans, passionnée par les nouvelles technologies. Curieuse,
            touche-à-tout, je navigue entre code, dessin, musique assistée par
            ordinateur et biologie.
          </p>
        </article>
      </div>
    </>
  );
};
