// About.tsx
import React from "react";
import portrait from "../../../public/assets/images/self_picture.jpg";
import "./ProfileSection.scss";

export const ProfileSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="introduction">
        <figure>
          <img
            className="portrait-img"
            src={portrait}
            alt="Photo de profil de Royer Julia"
          />
        </figure>
        <article>
          <h1>Développeuse Front-End</h1>
          <p>
            Je m'appelle <strong>Julia Royer</strong>, développeuse front-end en
            devenir, passionnée par les nouvelles technologies. Curieuse,
            touche-à-tout, je navigue entre code, dessin, musique assistée par
            ordinateur et biologie.
          </p>
        </article>
      </div>

      <div className="profile-sections">
        <section id="strengths" className="info-box">
          <h2>Mes points forts</h2>
          <ul>
            <li>
              ✨ Curiosité intellectuelle (la vraie, pas celle de LinkedIn)
            </li>
            <li>🎤 Aisance à l’oral (avec humour et auto-dérision)</li>
            <li>⚡ Énergie et dynamisme dans le travail en équipe</li>
            <li>📚 Culture générale nourrie par un parcours éclectique</li>
          </ul>
        </section>

        <section id="goals" className="info-box">
          <h2>Où je souhaite aller</h2>
          <ul>
            <li>🔍 Intelligence artificielle : créer des outils qui pensent</li>
            <li>🔐 Cybersécurité : casser pour mieux protéger</li>
            <li>🧬 Technologies biomédicales : allier code et soin</li>
            <li>🎭 Plateformes culturelles : rendre l’art interactif</li>
          </ul>
        </section>
      </div>
    </section>
  );
};
