import HomeTitle from "../../components/HomeTitle/HomeTitle"
import MeetingButton from '../../components/MeetingButton/MeetingButton'
import HomeLogoImg from '../../components/HomeLogoImg/HomeLogoImg'
import CreateMyWebButton from "../../components/CreateMyWebButton/CreateMyWebButton"
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <>
            <div id="home" className=' h-full w-full flex flex-col justify-center items-center lg:flex-row lg:justify-evenly'>
                <div className="flex flex-col justify-center items-center ">

                    <HomeTitle />
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2 }}
                        className="text-white flex justify-center text-center text-2xl mx-8 mb-10 font-sans	 max-w-md  lg:text-start lg:w-96 lg:text-base" >Design and development of websites and portfolios with AI and a marketing strategy in mind
                    </motion.h2>
                    <div className="flex flex-col h-28 justify-between items-center w-max lg:flex-row lg:w-full lg:h-14 lg:justify-evenly">

                        <CreateMyWebButton />
                        <MeetingButton />
                    </div>
                </div>
                <HomeLogoImg />
            </div>
        </>
    )
}
export default Home;