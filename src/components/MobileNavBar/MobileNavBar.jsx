import { LuMenu } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion"
import logoImg from '../../assets/logo.svg'

const MobileNavBar = () => {

    const navButtons = [
        {
            id: 1, name: 'Home', link: '#home'
        },
        {
            id: 2, name: 'About', link: '#about'
        },
        {
            id: 3, name: 'Projects', link: '#projects'
        },
        {
            id: 4, name: 'Skills', link: '#skills'
        },
        {
            id: 5, name: 'Contact', link: '#contact'
        },
    ]

    const [menuButtonView, setMenuButtonView] = useState(true)

    const navToggle = () => {
        setMenuButtonView(!menuButtonView)
    }



    return (
        <>
            <div className="fixed w-full z-10 bg-bgColor">

                <div className="flex flex-row justify-between items-center mt-3">

                    <img src={logoImg} alt="logo img" className="h-8 rounded-full ml-4 border-2 border-primary flex" />

                    <div onClick={navToggle} className="mr-4 ml-auto"  >
                        <motion.div

                            transition={{ duration: 0.1 }}
                            whileTap={{ scale: 0.2, opacity: 0 }}
                        >
                            {menuButtonView ? <LuMenu className="text-white text-4xl " /> : <RxCross1 className="text-white text-4xl " />}
                        </motion.div>
                    </div>

                </div>

                <div className=" h-2 w-full ">
                    {!menuButtonView &&

                        <ul className="w-full text-center fixed py-12 h-full  bg-bgColor  ">
                            {navButtons.map((button) =>
                                <motion.div key={button.id}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}>
                                    <a href={button.link} onClick={() => { setMenuButtonView(!menuButtonView) }} ><li className="text-white text-2xl py-6 w-full  "  >{button.name}</li></a>
                                </motion.div>
                            )}

                        </ul>}

                </div>

            </div >
        </>
    )
}

export default MobileNavBar;