import { TProject } from "../types";

const Project = ({project} : {project: TProject}) => {

	return(
		<a href={project.src} className="project" target="blank">
			<figure className="project__img">
				<img src= {project.iconUrl} alt="project image" />
			</figure>
			<div className="project__content">
				<h3 className="project__title">{project.description}</h3>
				<div className="project__technologies">
					<span className="project__technologies-sub-title">
						Technologies:
					</span>
					{project.technologies}</div>
				<p className="project__description">{project.longDescription}</p>
			</div>
		</a>
	)
}

export default Project;