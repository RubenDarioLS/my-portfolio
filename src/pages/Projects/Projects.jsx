import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../components/ProjectCard/projects";
/* Use context aca */
const Projects = () => {

    return (
        <div id="projects" className="h-max  flex flex-col items-center mb-10">
            <h2 className="text-primary text-5xl mb-8 mt-14">My Projects</h2>
            <div className="  flex flex-col lg:flex-row items-center mb-10 mt-5 ">

                {projects.map((project) => (<ProjectCard key={project.name} name={project.name} img={project.img} technologies={project.technologies} link={project.link} />))}
            </div>
        </div>
    )
}

export default Projects;