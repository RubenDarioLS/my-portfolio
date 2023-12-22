import './ProjectCard.css'


const ProjectCard = ({ name, img, tecnologies, link }) => {
    return (
        <>
            <div className='h-96 flex flex-col justify-center items-center m-5 bg-secondary w-80 p-16 rounded-xl relative '>
                <img className="h-16 w-max rounded mx-10 " src={img} alt={`${name} logo`} />

                <div className="flex flex-col items-center my-8 ">
                    <h3 className="text-white text-3xl mb-6" >{name}</h3>
                    <p className="text-white text-center w-72">Implemented technologies: <br /> {tecnologies}.</p>

                </div>
                <a href={link} target="_blank" className="projectButton">

                    <p className="buttonText">
                        Visit website
                    </p>
                </a>

            </div>
        </>
    )
}

export default ProjectCard;