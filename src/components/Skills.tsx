import data from "../data/skills-db.json";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section id="skills">
      <h1>My skills</h1>
      <div className="skills-section">
        {data.map((x) => {
          return <Skill key={x.id} skill={x} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
