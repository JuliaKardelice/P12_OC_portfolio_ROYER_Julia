import React from "react";

import { ProfileSection } from "../../components/aboutSection/ProfileSection";
import ProjectsList from "../../components/gallery/ProjectsList";
import { SkillsSection } from "../../components/skills/SkillsSection";

export const Home: React.FC = () => {
  return (
    <>
      <ProfileSection />
      <SkillsSection />
      <ProjectsList />
    </>
  );
};
