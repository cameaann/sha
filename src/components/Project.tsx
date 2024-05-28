import { TProject } from "../TProject";

const Project = ({project} : {project: TProject}) => {

	return(
		<div className="project">
			<figure className="project__img">
				<img src={project.iconUrl} alt="project image" />
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
		</div>
	)
}

export default Project;