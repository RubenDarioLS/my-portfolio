import SkillItem from "../../components/SkillItem/SkillItem";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


const skills = [
    { name: "HTML", icon: <IoLogoHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Firebase", icon: <IoLogoFirebase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },


]


const Skills = () => {


    return (
        <div id="skills" className="h-max py-20 flex flex-col items-center text-center bg-sky-900 pt-6">
            <h2 className="text-primary text-5xl mb-8 mt-12">Skills</h2>

            <div>


                {skills.map((skill, index) => (<SkillItem key={skill.name} skill={skill.name} icon={skill.icon} delay={index} />))}

            </div>
        </div>
    )
}

export default Skills;