import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../components/ProjectCard/projects";
/* Use context aca */
const Projects = () => {

    return (
        <div id="projects" className="h-max  flex flex-col items-center mb-10">
            <h2 className="text-primary text-5xl mb-8 mt-14">My Projects</h2>

            {projects.map((project) => (<ProjectCard key={project.name} name={project.name} img={project.img} tecnologies={project.tecnologies} link={project.link} />))}
        </div>
    )
}

export default Projects;