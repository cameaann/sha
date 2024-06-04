import data from "../data/projects-db.json";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <h1>My projects</h1>
      <div className="projects-section">
        {data.map((x) => {
          return <Project key={x.id} project={x} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
