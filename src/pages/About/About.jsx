import AnimatedButton from "../../components/AnimatedButton/AnimatedButton"

const About = () => {
    return (
        <div id="about" className="h-full flex flex-col justify-center items-center mt-10 text-center bg-sky-900  ">
            <h2 className="text-5xl text-primary  bg-transparent">About</h2>

            <p className="text-white my-10 text-2xl mx-7 max-w-sm bg-transparent">When you hire me, we will have time to get to know each other. It is better that you see my work, as my work speaks for itself.</p>

            <AnimatedButton text="My Projects" link="#projects" />

        </div>
    )
}

export default About