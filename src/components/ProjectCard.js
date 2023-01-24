
function ProjectCard({ project }) {
    const { appImg, name, description, tech, website, github } = project

  return (
    <div>
        <h1>{name}</h1>
        <img alt="mobile-app" src={appImg} style={{ width: 400}} ></img>
        <p>{description}</p>
        <p>{tech}</p>
        <a href={website}> website </a>
        <a href={github}> github </a>


    </div>
  )
}

export default ProjectCard