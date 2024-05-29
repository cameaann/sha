import data from "../data/projects-db.json";
import Project from "./Project";

const Projects = ()=>{

	return (
		<section className="projects-section">
			{data.map(x => {
				return <Project key={x.id} project = {x}/>
			})}
		</section>
	)
}

export default Projects;