import AnimatedButton from "../../components/AnimatedButton/AnimatedButton"
import AboutGallery from "../../components/AboutGallery/AboutGallery";
const About = () => {
    return (
        <div id="about" className="h-full flex flex-col  items-center justify-center bg-sky-900 lg:justify-start">
            <h2 className="text-5xl text-primary  bg-transparent lg:mt-20 ">About</h2>

            <div className="lg:flex lg:w-full lg:mt-24 lg:h-max  lg:max-w-5xl lg:justify-around  lg:items-start">

                <div className="flex flex-col items-center text-center lg:items-start h-max" >

                    <p className="text-white my-12 text-2xl mx-10 bg-transparent font-sans  max-w-2xl lg:text-start lg:max-w-sm lg:text-lg lg:mb-8 lg:mt-2 lg:leading-10  lg:mx-0 ">I am a self-taught front-end developer with experience in website development. Using AI to optimize my work, I create unique web interfaces designed from a marketing strategy that helps my clients achieve their goals.</p>

                    <AnimatedButton text="My Projects" link="#projects" />
                </div>

                <div>
                    <AboutGallery />
                </div>

            </div>


        </div>
    )
}

export default About;