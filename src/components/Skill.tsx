import { TSkill } from "../types";
const Skill =  ({skill}: {skill: TSkill}) =>{
	return(
		<div className="skill-card">
			<span><i className={skill.icon +" "+ skill.name.toLowerCase()}></i></span>
            <h3>{skill.name}</h3>
		</div>
	)
}
export default Skill;