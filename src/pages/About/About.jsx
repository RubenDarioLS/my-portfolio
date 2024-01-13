import AnimatedButton from "../../components/AnimatedButton/AnimatedButton"

const About = () => {
    return (
        <div id="about" className="h-full flex flex-col  items-center justify-center mt-10 text-center bg-sky-900  ">
            <h2 className="text-5xl text-primary  bg-transparent ">About</h2>

            <p className="text-white my-12 text-2xl mx-5 bg-transparent font-sans">I am a self-taught front-end developer with experience in website development.
                I create unique web interfaces designed from a marketing strategy that helps my clients achieve their goals. I am always learning new technologies and enjoy working as a team.<br /> I invite you to see my work!</p>

            <AnimatedButton text="My Projects" link="#projects" />

        </div>
    )
}

export default About;