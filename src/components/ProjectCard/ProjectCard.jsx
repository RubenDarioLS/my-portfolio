import './ProjectCard.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaReact } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss, SiFirebase } from "react-icons/si";


const ProjectCard = ({ name, img, technologies, link }) => {



    return (
        <>
            <article className='h-96 flex flex-col justify-center items-center m-5 bg-secondary w-80 p-16 rounded-xl relative '>
                <img className="h-16 w-max rounded mx-10 " src={img} alt={`${name} logo`} />

                <div className="flex flex-col items-center my-8 ">
                    <h3 className="text-white text-3xl mb-6" >{name}</h3>
                    <p className="text-white text-center w-72">
                        Implemented technologies: </p>
                    <div className='flex justify-between mt-3'>

                        {technologies.map((tec, index) => (
                            <div key={index} className='text-2xl text-primary px-1'>
                                {tec === "html" && <FaHtml5 />}
                                {tec === "css" && <FaCss3Alt />}
                                {tec === "javascript" && <SiJavascript />}
                                {tec === "react" && <FaReact />}
                                {tec === "firebase" && <SiFirebase />}
                                {tec === "tailwind" && <SiTailwindcss />}

                            </div>
                        ))
                        }
                    </div>



                </div>
                <a href={link} target="_blank" className="projectButton">

                    <p className="buttonText">
                        Visit website
                    </p>
                </a>

            </article>
        </>
    )
}

export default ProjectCard;