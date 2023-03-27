
function ProjectCard({ project }) {
	const { appImg, name, description, tech, website, github } = project;

	return (
		<div className="project-card">
			<img alt="mobile-app" src={appImg}></img>
			<div className="project-text">
				<h1>{name.toUpperCase()}</h1>
				<h4>{description.toUpperCase()}</h4>
			</div>
			<div className="project-tech">
				{tech.map((item, i) => (
					<ul key={i}><img src={item}/></ul>
				))}
			</div>
			<div className="project-links">
				{ website ? 
				<a href={website} target="_blank">
					website
				</a> : null }
				<a href={github} target="_blank">
					github
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
