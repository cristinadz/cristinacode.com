import ProjectCard from "../components/ProjectCard"

function WorkPage({projects}) {
const projectCards = projects.map( (project) => (
  <ProjectCard project={project} key={project.name} />
))
  return (
    <div className="work-container">
      {projectCards}
    </div>
  )
}

export default WorkPage