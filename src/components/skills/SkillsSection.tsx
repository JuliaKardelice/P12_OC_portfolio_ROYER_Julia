import React from "react";
import "./Skills.scss";

export const SkillsSection: React.FC = () => {
  return (
    <>
      <section id="skills">
        <h2>Mes compétences techniques</h2>
        <ul>
          <li>
            <strong>HTML / CSS / SASS</strong> – Maquettage pixel-perfect et
            animations
          </li>
          <li>
            <strong>JavaScript / React / Redux</strong> – Composants dynamiques,
            gestion d’état élégante
          </li>
          <li>
            <strong>GitHub</strong> – Versionnage en toute sérénité
          </li>
          <li>
            <strong>SEO</strong> – Pour que Google t’aime
          </li>
          <li>
            <strong>Anglais technique</strong> – Lu, parlé, débogué
          </li>
        </ul>
      </section>
    </>
  );
};
