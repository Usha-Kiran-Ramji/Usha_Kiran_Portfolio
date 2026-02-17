// File: src/pages/LandingPage.jsx
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import WorkExperience from "../components/work/WorkExperience";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <WorkExperience />
      </div>

      <div id="projects">
        <ProjectsPage />
      </div>

      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
};

export default LandingPage;
