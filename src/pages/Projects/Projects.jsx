import './Projects.css'
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../components/ProjectCard/projects";
const Projects = () => {

    return (
        <section id="projects" className="h-max  flex flex-col items-center mb-20">
            <h2 className="text-primary text-6xl mb-8 mt-24">My Projects</h2>
            <div className="projectsContainers">

                {projects.map((project) => (<ProjectCard key={project.name} name={project.name} img={project.img} technologies={project.technologies} link={project.link} />))}
            </div>
        </section>
    )
}

export default Projects;