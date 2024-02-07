import AnimatedButton from "../../components/AnimatedButton/AnimatedButton"
import AboutGallery from "../../components/AboutGallery/AboutGallery";
const About = () => {
    return (
        <section id="about" className=" h-full flex flex-col  items-center justify-center bg-sky-900 lg:justify-start lg:h-max ">
            <h2 className="text-6xl text-primary  bg-transparent lg:mt-32 ">About</h2>

            <div className="lg:flex lg:w-full lg:mt-28 lg:h-max  lg:max-w-6xl lg:justify-around  lg:items-start  lg:mb-60">

                <div className="flex flex-col items-center text-center lg:items-start h-max" >

                    <p className="text-white my-12 text-2xl mx-8 bg-transparent font-sans  max-w-2xl lg:text-start lg:max-w-lg lg:text-xl lg:mb-8 lg:mt-2 lg:leading-10  lg:mx-0 ">I am a self-taught front-end developer with experience in website development. Using AI to optimize my work, I create unique web interfaces designed from a marketing strategy that helps my clients achieve their goals.</p>

                    <AnimatedButton text="My Projects" link="#projects" />
                </div>

                <div>
                    <AboutGallery />
                </div>

            </div>


        </section>
    )
}

export default About;