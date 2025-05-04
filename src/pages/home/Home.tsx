import React from "react";

import { ProfileSection } from "../../components/aboutSection/ProfileSection";
import { SkillsSection } from "../../components/skills/SkillsSection";
import ProjectsList from "../gallery/ProjectsList";

export const Home: React.FC = () => {
  return (
    <>
      <ProfileSection />
      <SkillsSection />
      <ProjectsList />
    </>
  );
};
